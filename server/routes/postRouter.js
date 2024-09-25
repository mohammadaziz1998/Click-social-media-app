const express = require('express');
const postController = require('../controllers/postController');
const authController = require('../controllers/authController');
const photoUpload = require('../utils/photoUpload');
const handleImage = require('../utils/handleImage');

const router = express.Router();
router.get('/', authController.protect, postController.getAllPosts);
// router.get('/friends-posts', postController.getAllPosts);
router.post(
  '/newpost',
  authController.protect,
  photoUpload().single('image'),
  handleImage('posts'),
  postController.createPost
);

module.exports = router;
