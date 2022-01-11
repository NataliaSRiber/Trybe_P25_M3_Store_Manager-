const { StatusCodes } = require('http-status-codes');

const invalidData = (status, message) => ({
  code: 'invalid_data',
  status,
  message,
});

const alreadyExists = (status) => ({
  code: 'invalid_data',
  status,
  message: 'Product already exists',
});

const notFound = (status, message) => ({
  code: 'not_found',
  status,
  message,
});

const stockProblem = (status, message) => ({
  code: 'stock_problem',
  status,
  message,
});

const wrongId = {
  code: 'invalid_data',
  status: StatusCodes.UNPROCESSABLE_ENTITY,
  message: 'Wrong id format',
};

module.exports = {
  invalidData,
  notFound,
  stockProblem,
  alreadyExists,
  wrongId,
};
