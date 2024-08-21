const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  notifications: [
    new mongoose.Schema({
      text: {
        type: String,
        required: [true, 'Please provide a notification text'],
      },
      date: {
        type: Date,
        default: new Date(),
      },
    }),
  ],
  read: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'notification must belong to a user'],
  },
});
const Notification = mongoose.model('Notification', notificationSchema);
module.exports = Notification;
