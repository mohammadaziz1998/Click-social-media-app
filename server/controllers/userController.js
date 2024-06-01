const User = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

///////////
///////////
///////////
exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find({}).populate({
    path: 'friends',
  });
  res.status(200).json({
    status: 'success',
    result: users.length,
    data: {
      data: users,
    },
  });
});

exports.createUsers = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      data: user,
    },
  });
});

exports.getCurrentUser = catchAsync(async (req, res) => {
  const user = await User.findById(req.user._id)
    .populate({
      path: 'friends',
      select: ['name', 'photo', 'active'],
    })
    .populate({ path: 'posts', populate: { path: 'user' } });
  user.role = 'authenticated';
  res.status(200).json({
    status: 'success',
    user,
  });
});

exports.uploadPhoto = catchAsync(async (req, res, next) => {
  console.log(req.file);
  if (!req.file.mimetype.startsWith('image'))
    return next(new AppError('The file you attached is not image ', 406));
  const updatedUser = await User.findByIdAndUpdate(req.user._id, {
    photo: req.file.filename,
  });
  console.log(updatedUser);
  res.status(204).json({
    status: 'success',
    data: updatedUser,
  });
});

exports.updateUserInformation = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(req.user._id, {
    name: req.body.name,
    age: req.body.age,
  });
  res.status(202).json({
    status: 'success',
    data: updatedUser,
  });
});
