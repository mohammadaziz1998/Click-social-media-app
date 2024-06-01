const catchAsync = require('../utils/catchAsync');
const Comments = require('../models/commentsModel');

exports.createComment = catchAsync(async (req, res, next) => {
  const comment = await Comments.findOneAndUpdate(
    { post: req.params.postId },
    { $push: { comments: { text: req.body.comment, user: req.user._id } } },
    { returnDocument: 'after' }
  );
  if (comment === null) {
    const comment = await Comments.create({
      post: req.params.postId,

      comments: [
        {
          text: req.body.comment,
          user: req.user._id,
        },
      ],
    });
    return res.status(201).json({
      status: 'success',
      comment,
    });
  }
  res.status(201).json({
    status: 'success',
    comment,
  });
});

exports.getAllCommentsOnPost = catchAsync(async (req, res, next) => {
  const comments = await Comments.find({ post: req.params.postId }).populate({
    path: 'comments',
    populate: { path: 'user', select: ['name', 'photo'] },
  });
  if (comments.length < 1)
    return next(new AppError('There is no comments on this post yet', 404));
  res.status(200).json({
    status: 'success',
    comments,
  });
});
