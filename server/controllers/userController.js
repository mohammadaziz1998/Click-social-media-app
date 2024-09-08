const { default: mongoose } = require('mongoose');
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

  const friend = await User.findById(id);
  if (!friend) return next(new AppError('There is no user with id'));
  res.status(200).json({ status: 'success', friend });
});

exports.addFriend = catchAsync(async (req, res, next) => {
  const { _id, name } = req.user;
  const { friendid } = req.params;
  const notifi = `You have a friend request from ${name}`;

  const user = await User.findByIdAndUpdate(friendid, {
    $push: { friendRequest: { fromUser: _id } },
  });
  if (!user) return next(new AppError('Cant register friend request', 403));

  const notification = await Notification.findOneAndUpdate(
    { user: friendid },
    { $push: { notifications: { text: notifi, notificationFrom: _id } } }
  );
  // console.log(notification);
  if (!notification)
    return next(new AppError('There is no notification with id'));
  res.status(200).json({ status: 'success' });
});

exports.isMyFriend = catchAsync(async (req, res, next) => {
  const userId = req.user._id;

  const { friendid } = req.params;
  const user = await User.aggregate([
    {
      $match: { _id: new mongoose.Types.ObjectId(`${friendid}`) },
    },
    {
      $match: {
        'friendRequest.fromUser': {
          $in: [userId],
        },
      },
    },
    {
      $count: 'user',
    },
  ]);
  const data =
    user.length === 0 ? 'has not send friend request' : 'send friend request';
  res.status(200).json({
    status: 'success',
    data,
  });
});

exports.friendRequestAnswer = async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { answer, id: userId } = req.body;
    const { _id: userAcceptId } = req.user;
    console.log(userId, userAcceptId, answer);
    if (answer === 'accept') {
      const userAccepte = await User.findByIdAndUpdate(
        userAcceptId,
        {
          $addToSet: { friends: userId },
        },
        { session }
      );
      await User.updateOne(
        {
          _id: userAcceptId,
          'friendRequest.fromUser': new mongoose.Types.ObjectId(`${userId}`),
        },
        { $set: { 'friendRequest.$.status': 'accept' } },
        { session }
      );
      const user = await User.findByIdAndUpdate(
        userId,
        {
          $addToSet: { friends: userAcceptId },
        },
        { session }
      );
      await Notification.findOneAndUpdate(
        { user: userId },
        {
          $push: {
            notifications: {
              text: `You are now Friend with ${userAccepte.name}`,
              notificationFrom: userAcceptId,
            },
          },
        }
      );
      await Notification.findOneAndUpdate(
        { user: userAcceptId },
        {
          $push: {
            notifications: {
              text: `You are now Friend with ${user.name}`,
              notificationFrom: userAcceptId,
            },
          },
        }
      );
    }

    if (answer === 'decline') {
      const userAccepte = await User.findById(userAcceptId, { session });
      await User.updateOne(
        {
          _id: userAcceptId,
          'friendRequest.fromUser': new mongoose.Types.ObjectId(`${userId}`),
        },
        { $set: { 'friendRequest.$.status': 'reject' } },
        { session }
      );
      await Notification.findOneAndUpdate(
        { user: userId },
        {
          $push: {
            notifications: {
              text: `${userAccepte.name} decline your friend request`,
              notificationFrom: userAcceptId,
            },
          },
        }
      );
    }
    await session.commitTransaction();
    return res.status(200).json({
      status: 'success',
    });
  } catch (error) {
    console.log('An error occurred during the transaction:' + error);

    await session.abortTransaction();
  } finally {
    await session.endSession();
  }
};

exports.friendRequest = catchAsync(async (req, res, next) => {
  const requests = await User.findById(req.user._id)
    .populate({
      path: 'friendRequest',
      populate: {
        path: 'fromUser',
        select: ['_id', 'name', 'photo', 'active'],
      },
    })
    .select('friendRequest');

  if (!requests) return next(new AppError('You have no freinds yet', 404));

  res.status(200).json({
    status: 'success',
    data: requests,
  });
});
