const express = require('express');
const { talkerRoute } = require('./routes/talkerRoute');

const app = express();

app.use(express.json());

app.use('/talker', talkerRoute);

// não remova esse endpoint, e para o avaliador funcionar
const HTTP_OK_STATUS = 200;
const PORT = '3000';
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
