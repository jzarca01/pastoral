export const notFound = (req, res, next) => {
  res.status(404).send({
    data: null,
    errors: ['NOT_FOUND'],
    errorMessage: '404 not found'
  });

  next();
};
