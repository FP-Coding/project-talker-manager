const { Router } = require('express');
const manipulateTalkers = require('../utils/fs');

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

talkerRoute.put('/:id', (req, res) => {

});

module.exports = {
  talkerRoute,
};