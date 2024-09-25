const multer = require('multer');

module.exports = function uploadPhoto() {
  // const storage = multer.diskStorage({
  //   destination: function (req, file, cb) {
  //     console.log(file);
  //     cb(null, `./public/images/${path}`);
  //   },
  //   filename: function (req, file, cb) {
  //     const uniquePhotoName = `${Date.now()}-${Math.random(
  //       Math.random() * 1000
  //     )}-${req.user.name}.${file.mimetype.split('/')[1]}`;
  //     cb(null, uniquePhotoName);
  //   },
  // });
  // return (upload = multer({ storage: storage }));

  const storage = multer.memoryStorage();
  const upload = multer({ storage: storage });

  return upload;
};
