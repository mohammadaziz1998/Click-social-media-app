const Notification = require('../models/notificationModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.getUserNotification = catchAsync(async (req, res, next) => {
  const notification = await Notification.findOne({
    user: req.user._id,
  }).populate({
    path: 'notifications',
    populate: { path: 'notificationFrom', select: ['name', 'photo', 'active'] },
  });
  if (!notification)
    return next(new AppError('There is no notification for this user', 404));
  res.status(200).json({
    status: 'success',
    data: notification,
  });
});
