const sharp = require('sharp');

module.exports = async function handleImage(req, res, next) {
  console.log('req.file', req.file);
  const { path } = req.file;
  console.log(path);
  await sharp(path)
    .toFormat('jpeg')
    .resize(600, 400)
    .toFile('output.jpg', function (err) {
      console.log('error in handlephoto', err);
    });
  next();
};
