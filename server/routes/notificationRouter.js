const express = require('express');
const authController = require('../controllers/authController');
const notificationController = require('../controllers/notificationController');

const router = express.Router();

router.get(
  '/',
  authController.protect,
  notificationController.getUserNotification
);
module.exports = router;
