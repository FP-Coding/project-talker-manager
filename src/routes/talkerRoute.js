const { Router } = require('express');
const manipulateTalkers = require('../utils/fs');
const { tokenValidator } = require('../middlewares/validators/tokenValidator');
const { nameValidator } = require('../middlewares/validators/nameValidator');
const { ageValidator } = require('../middlewares/validators/ageValidator');
const { 
  dateValidator, 
  ratingValidator, 
  talkValidator } = require('../middlewares/validators/talkValidator');

const talkerRoute = Router();

talkerRoute.get('/', async (_req, res) => {
  const talkers = await manipulateTalkers.readFileTalker();
  res.status(200).json(talkers);
});

talkerRoute.get('/:id', async (req, res) => {
  const { id } = req.params;
  const talkers = await manipulateTalkers.readFileTalker();
  const talkerById = talkers.find(({ id: idTalker }) => idTalker === Number(id));
  if (!talkerById) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  return res.status(200).json(talkerById);
});

talkerRoute.post('/', 
tokenValidator,
nameValidator,
ageValidator,
talkValidator,
dateValidator,
ratingValidator,
  async (req, res) => {
  const content = req.body;
  const createdTalker = await manipulateTalkers.addNewTalker(content);
  return res.status(201).json(createdTalker);
});

talkerRoute.put('/:id',
tokenValidator,
nameValidator,
ageValidator,
talkValidator,
dateValidator,
ratingValidator,
  async (req, res) => {
  const { id } = req.params;
  const content = req.body;
  const updatedTalker = await manipulateTalkers.updateTalkerById(content, Number(id));
  return res.status(200).json(updatedTalker);
});

talkerRoute.delete('/:id', tokenValidator, async (req, res) => {
  const { id } = req.params;
  await manipulateTalkers.deleteTalkerById(Number(id));
  res.status(204).end();
});

module.exports = {
  talkerRoute,
};