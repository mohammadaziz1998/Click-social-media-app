const { default: mongoose, model } = require('mongoose');

const postSchema = mongoose.Schema({
  text: {
    type: String,
  },
  photo: { type: String },
  createdAt: { type: Date, default: Date.now() },
  like: { type: Number },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Post must belong to a user'],
  },
});
const Post = mongoose.model('Post', postSchema);
module.exports = Post;
