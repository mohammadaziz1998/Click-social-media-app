const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const express = require('express');
const router = express.Router();
const photoUpload = require('../utils/photoUpload');

// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, `../client/public/images/profile`);
//   },
//   filename: function (req, file, cb) {
//     const uniquePhotoName = `${Date.now()}-${Math.random(
//       Math.random() * 1000
//     )}-${req.user.name}.${file.mimetype.split('/')[1]}`;

//     cb(null, uniquePhotoName);
//   },
// });
// const upload = multer({ storage: storage });

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

module.exports = router;
