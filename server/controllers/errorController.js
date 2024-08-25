const AppError = require('../utils/appError');

const sendErrorDev = (err, req, res) => {
  console.log(err);
  if (req.originalUrl.startsWith('/api')) {
    return res.status(err.statusCode).json({
      stauts: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }
};
const sendErrorProd = (err, req, res) => {
  console.log('err prod', err);
  if (req.originalUrl.startsWith('/api')) {
    if (err.isOperational)
      return res.status(err.statusCode).json({
        stauts: err.status,
        message: err.message,
      });
  }
  return res.status(500).json({
    status: 'error',
    message: 'Something went very wrong!',
  });
};

function handleDuplicateFieldsDB(err) {
  const value = err?.errorResponse?.errmsg?.match(/(["'])(\\?.)*?\1/)[0];
  console.log(value);
  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
}

module.exports = (err, req, res, next) => {
  // console.log(err);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV.trim() === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV.trim() === 'production') {
    let error = { ...err };
    error.message = err.message;

    if (error.name === 'ValidationError') sendErrorDev(err, req, res);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);

    sendErrorProd(error, req, res);
  }
};
