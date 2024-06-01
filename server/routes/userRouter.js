const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const express = require('express');
const router = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `../client/public/images/profile`);
  },
  filename: function (req, file, cb) {
    const uniquePhotoName = `${Date.now()}-${Math.random(
      Math.random() * 1000
    )}-${req.user.name}.${file.mimetype.split('/')[1]}`;

    cb(null, uniquePhotoName);
  },
});
const upload = multer({ storage: storage });

/////////
/////////
/////////
router.post('/login', authController.login);
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
  upload.single('image'),
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
module.exports = router;
