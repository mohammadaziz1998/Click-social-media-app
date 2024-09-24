const sharp = require('sharp');
const fs = require('fs');

module.exports = async function handleImage(req, res, next) {
  console.log('req.file', req.file);
  const { path } = req.file;
  console.log(`${req.file.destination}/${req.file.filename}`);

  console.log(path);
  await sharp(path)
    .toFormat('jpeg')
    .resize(600, 400)
    .toBuffer(function (err, buffer) {
      fs.writeFile(path, buffer, function (error) {
        console.log('error in handle photo', error);
      });
    });
  next();
};
