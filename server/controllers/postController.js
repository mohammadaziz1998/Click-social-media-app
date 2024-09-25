const Post = require('../models/postModel');
const catchAsync = require('../utils/catchAsync');
const Comment = require('../models/commentsModel');
const User = require('../models/userModel');

exports.getAllPosts = catchAsync(async (req, res, next) => {
  // const posts = await Post.find().populate({
  //   path: 'user',
  //   select: ['name', 'photo', 'active'],
  // });

  // if (!posts)
  //   return next(new AppError('Somthing went wrong while fetching posts', 401));
  // const sortedPost = posts.sort((a, b) => b.createdAt - a.createdAt);
  // res.status(200).json({
  //   status: 'success',
  //   result: posts.length,
  //   data: {
  //     data: sortedPost,
  //   },
  // });
  const { page = 0, pageSize = 10 } = req.query;

  const posts = await Post.aggregate([
    {
      $facet: {
        data: [
          { $sort: { createdAt: -1 } },
          { $skip: page * pageSize },
          { $limit: pageSize },
          {
            $lookup: {
              from: 'users',
              localField: 'user',
              foreignField: '_id',
              as: 'usersPost',
            },
          },
        ],
      },
    },
  ]);

  res.status(200).json({
    status: 'success',
    data: posts[0].data,
  });
});
exports.createPost = catchAsync(async (req, res, next) => {
  const newPost = {
    user: req.user._id,
    text: req.body.text,
    photo: req.file.newPhotoName,
  };
  console.log('image from post ', req.file);
  console.log(req.body);
  const post = await Post.create(newPost);
  if (!post)
    return next(new AppError("Can't create new post. try again later!", 402));

  const { _id } = post;
  await User.findByIdAndUpdate(req.user._id, { $push: { posts: _id } });
  res.status(201).json({
    status: 'success',
    data: {
      post,
    },
  });
});
