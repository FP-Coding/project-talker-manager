const tokenValidator = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token não encontrado' });
  const condition = authorization.length !== 16 || typeof authorization !== 'string';
  if (condition) return res.status(401).json({ message: 'Token inválido' });
  next();
};

module.exports = {
  tokenValidator,
};