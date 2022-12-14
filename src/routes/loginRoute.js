const { Router } = require('express');
const generateToken = require('../utils/generateToken');

const loginRoute = Router();

loginRoute.post('/', (_req, res) => {
  const token = generateToken();
  return res.status(200).json({ token });
});

module.exports = {
  loginRoute,
};