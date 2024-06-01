const express = require('express');
const commentController = require('../controllers/commentController');
const authController = require('../controllers/authController');
const router = express.Router();

router.post(
  '/comment/:postId',
  authController.protect,
  commentController.createComment
);
router.get(
  '/:postId',
  authController.protect,
  commentController.getAllCommentsOnPost
);
module.exports = router;
