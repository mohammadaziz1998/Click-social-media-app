const express = require('express');
const postController = require('../controllers/postController');
const authController = require('../controllers/authController');
const photoUpload = require('../utils/photoUpload');

const router = express.Router();
router.get('/', authController.protect, postController.getAllPosts);
// router.get('/friends-posts', postController.getAllPosts);
router.post(
  '/newpost',
  authController.protect,
  photoUpload('posts').single('image'),
  postController.createPost
);

module.exports = router;
