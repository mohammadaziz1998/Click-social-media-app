const Notification = require('../models/notificationModel');
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
exports.findFirends = catchAsync(async (req, res, next) => {
  const searchString = req.params.searchText;
  const friends = await User.aggregate([
    {
      $search: {
        index: 'searchUsers',
        text: {
          query: searchString,
          path: { wildcard: '*' },
          fuzzy: {},
        },
      },
    },
  ]);
  await User.findByIdAndUpdate(
    req.user._id,

    {
      $addToSet: { history: searchString },
    }
  );

  res.status(200).json({
    status: 'success',
    friends,
  });
});
exports.autoComplete = catchAsync(async (req, res, next) => {
  const searchString = req.params.searchText;
  const friends = await User.aggregate([
    {
      $search: {
        index: 'autoCompleteUsers',
        autocomplete: {
          query: searchString,
          path: 'name',
          tokenOrder: 'sequential',
        },
      },
    },
    {
      $limit: 10,
    },
    {
      $project: {
        name: 1,
      },
    },
  ]);

  res.status(200).json({
    status: 'success',
    friends,
  });
});

exports.getFrienPage = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  console.log(req.params);
  const friend = await User.findById(id);
  if (!friend) return next(new AppError('There is no user with id'));
  res.status(200).json({ status: 'success', friend });
});

exports.addFriend = catchAsync(async (req, res, next) => {
  const { friendid } = req.params;
  const notifi = `You have a friend request from ${req.user.name}`;

  const notification = await Notification.findOneAndUpdate(
    { user: friendid },
    { $push: { notifications: { text: notifi } } }
  );
  console.log(notification);
  if (!notification) return next(new AppError('There is no user with id'));
  res.status(200).json({ status: 'success' });
});
