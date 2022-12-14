const { Router } = require('express');

const talkerRoute = Router();

talkerRoute.get('/', (_req, res) => {
  res.status(200).json([]);
});

module.exports = {
  talkerRoute,
};