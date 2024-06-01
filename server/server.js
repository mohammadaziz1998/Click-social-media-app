const mongoose = require('mongoose');
const app = require('./app');

const connection = mongoose
  .connect(process.env.DATABASE, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then((con) => {
    console.log('DB connection successful');
  });

///////////////

const PORT = process.env.PORT || 8000;
app.listen(8000, () => console.log(`server listening on port ${PORT}`));
