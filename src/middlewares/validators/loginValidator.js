const passwordValidator = (req, res, next) => {
  const { password } = req.body;
  if (!password || password.length === 0) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });  
  }
  
  if (password.length <= 5) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });  
  }
  next();
};

const emailValidator = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

module.exports = {
  passwordValidator,
  emailValidator,
};