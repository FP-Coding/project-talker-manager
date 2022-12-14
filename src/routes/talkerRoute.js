const { Router } = require('express');
const manipulateTalkers = require('../utils/fs');

const talkerRoute = Router();

talkerRoute.get('/', async (_req, res) => {
  const talkers = await manipulateTalkers.readFileTalker();
  res.status(200).json(talkers);
});

module.exports = {
  talkerRoute,
};