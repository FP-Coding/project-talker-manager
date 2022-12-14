const talkValidator = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) { 
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' }); 
  }
  if (!talk.watchedAt) { 
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' }); 
  }
  if (!talk.rating) return res.status(400).json({ message: 'O campo "rate" é obrigatório' });  

  next();
};

const dateValidator = (req, res, next) => {
  const { talk } = req.body;
  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (!isFormatDate.test(talk.watchedAt)) { 
    return res.status(400)
    .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' }); 
  }
  next();
};

const ratingValidator = (req, res, next) => {
  const { talk } = req.body;
  const isANumberCorrect = [1, 2, 3, 4, 5];
  if (!isANumberCorrect.includes(talk.rating)) { 
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' }); 
  }
  next();
};

module.exports = {
  talkValidator,
  dateValidator,
  ratingValidator,
};