const jwt = require('jsonwebtoken');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/userModel');
const AppError = require('../utils/appError');
const { promisify } = require('util');
const { NONAME } = require('dns');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);
  const cookieOptions = {
    secure: true,
    sameSite: 'None',
    httpOnly: true,
    expires: new Date(
      Date.now() + process.env.JWT_COOkie_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
  };

  res.cookie('jwt', token, cookieOptions);
  user.password = undefined;
  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};
exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new AppError('Please provide your email and password', 400));

  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.correctPassword(password, user.password)))
    return next(new AppError('Incorrect email or password'));

  createSendToken(user, 200, res);
});

exports.logout = catchAsync(async (req, res, next) => {
  res
    .clearCookie('jwt', {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
      secure: true,
      sameSite: 'None',
    })
    .status(200)
    .json({
      status: 'success',
    });
});
exports.protect = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token)
    return next(
      new AppError('You are not logged in! Please log in to get access', 401)
    );
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(decoded.id);
  if (!currentUser)
    return next(
      new AppError(
        'The user belonging to this token dose no longer exist.',
        401
      )
    );
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('User recently changed password! Please log in again.', 401)
    );
  }
  req.user = currentUser;

  next();
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id).select('+password');
  if (!(await user.correctPassword(req.body.currentPassword, user.password)))
    return next(new AppError('The provided passowrd is incrrect!', 404));

  user.password = req.body.newPassword;
  user.passwordConfirm = req.body.confirmNewPassword;
  await user.save();

  createSendToken(user, 200, res);
});
