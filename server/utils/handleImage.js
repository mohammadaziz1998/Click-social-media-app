const sharp = require('sharp');
const fs = require('fs');

module.exports = function handleImage(path) {
  return async (req, res, next) => {
    console.log('req.file', req.file);
    const { buffer } = req.file;
    console.log(buffer);

    console.log(buffer);
    const image = await sharp(buffer)
      .resize(600, 400, {
        fit: sharp.fit.inside,
        withoutEnlargement: true,
      })
      .toBuffer();
    // function (err, buffer) {
    // console.log('error before', err);
    // fs.writeFile(
    //   `${req.file.destination}/${req.file.filename}`,
    //   buffer,
    //   function (error) {
    //     console.log('error in handle photo', error);
    //   }
    const uniquePhotoName = `${Date.now()}-${Math.random(
      Math.random() * 1000
    )}-${req.user.name}.${req.file.mimetype.split('/')[1]}`;

    req.file.newPhotoName = uniquePhotoName;
    fs.writeFile(`./public/images/${path}/${uniquePhotoName}`, image, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
    next();
  };
};
