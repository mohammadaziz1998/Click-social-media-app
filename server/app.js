// const dotenv = require('dotenv');
// dotenv.config({ path: './config.env' });
// const userRouter = require('./routes/userRouter');
// const postRouter = require('./routes/postRouter');
// const commentRouter = require('./routes/commentRouter');
// const notificationRouter = require('./routes/notificationRouter');
// const globalErrorHandler = require('./controllers/errorController');
// const AppError = require('./utils/appError');
// const cookieParser = require('cookie-parser');
// const cors = require('cors');
// const session = require('express-session');
// const express = require('express');
// const morgan = require('morgan');

// const app = express();
// //////////
// //////////
// app.use(express.static('public'));
// app.use(
//   cors({
//     credentials: true,
//     origin: process.env.FRONT_END_URL,
//     AllowMethods: 'GET,POST,HEAD,DELETE,PUT',
//   })
// );

// // app.use(cors());
// app.options('*', cors());

// app.use(morgan('dev'));

// /////////////

// ////////////////////////////// /
// // app.use(
// //   session({
// //     secret: process.env.SESSION_SECRET,
// //     resave: false,
// //     saveUninitialized: true,
// //     cookie: {
// //       name: 'session',
// //       maxAge: 1000 * 60 * 60,
// //       sameSite: 'None',
// //     },
// //   })
// // );
// /////////////
// app.use(express.json({ limit: '10kb' }));
// app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// app.use(express.json());
// app.use(cookieParser());

// app.use('/api/v1/posts', postRouter);
// app.use('/api/v1/notification', notificationRouter);
// app.use('/api/v1/users', userRouter);
// app.use('/api/v1/comments', commentRouter);

// app.all('*', (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
// });

// app.use(globalErrorHandler);

// module.exports = app;
