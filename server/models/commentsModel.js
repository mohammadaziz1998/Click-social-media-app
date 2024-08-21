const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.ObjectId,
    ref: 'Post',
    required: [true, 'comment must belong to a post'],
  },
  comments: [
    new mongoose.Schema({
      text: {
        type: String,
        // required: [true, 'every comment must have text'],
      },
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        // required: [true, 'comment must belong to a user'],
      },
      createdAt: { type: Date, default: new Date() },
    }),
  ],
});
const Comments = mongoose.model('Comments', commentsSchema);
module.exports = Comments;

/*
comments: [
    {
      text: {
        type: String,
        required: [true, 'every comment must have text'],
      },
      user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'comment must belong to a user'],
      },
      createdAt: { type: Date, default: new Date.now() },
    },
  ],
  */
