const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const express = require('express');
const router = express.Router();
const photoUpload = require('../utils/photoUpload');
const handleImage = require('../utils/handleImage');

/////////
/////////
/////////
router.post('/login', authController.login);
router.post('/signup', authController.signup);
router.post('/logout', authController.logout);
router.get(
  '/currentuser',
  authController.protect,
  userController.getCurrentUser
);
router.get('/', authController.protect, userController.getAllUsers);
router.patch(
  '/uploadphoto',
  authController.protect,
  // upload.single('image'),
  photoUpload('profile').single('image'),
  // handleImage,
  userController.uploadPhoto
);
router.post('/', userController.createUsers);
router.post(
  '/updateinfo',
  authController.protect,
  userController.updateUserInformation
);
router.post(
  '/updatepassword',
  authController.protect,
  authController.updatePassword
);
router.get(
  '/search/:searchText',
  authController.protect,
  userController.findFirends
);
router.get(
  '/autocomplete/:searchText',
  authController.protect,
  userController.autoComplete
);
router.get(
  '/friendpage/:id',
  authController.protect,
  userController.getFrienPage
);
router.get(
  '/addfreind/:friendid',
  authController.protect,
  userController.addFriend
);
router.get(
  '/isfriend/:friendid',
  authController.protect,
  userController.isMyFriend
);
router.post(
  '/handlefriendrequest',
  authController.protect,
  userController.friendRequestAnswer
);
router.get(
  '/friendrequests',
  authController.protect,
  userController.friendRequest
);

module.exports = router;
