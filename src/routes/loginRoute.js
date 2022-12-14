const { Router } = require('express');
const generateToken = require('../utils/generateToken');
const { emailValidator, passwordValidator } = require('../middlewares/validators/loginValidator');

const loginRoute = Router();

loginRoute.post('/',
  emailValidator,
  passwordValidator,
  (_req, res) => {
  const token = generateToken();
  return res.status(200).json({ token });
  });

module.exports = {
  loginRoute,
};