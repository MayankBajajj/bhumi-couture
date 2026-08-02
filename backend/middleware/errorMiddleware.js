export const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  
  let clientMessage = err.message;
  
  if (err.name === 'ValidationError') {
    clientMessage = 'Please verify that all fields have valid values.';
  } else if (err.name === 'CastError') {
    clientMessage = 'The requested resource identifier is invalid.';
  } else if (err.code === 11000) {
    clientMessage = 'A record with duplicate details already exists.';
  } else if (statusCode === 500) {
    console.error('[500 Internal Error]:', err);
    clientMessage = 'An unexpected server error occurred. Please try again later.';
  }

  res.json({
    message: clientMessage,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};

export const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
