const { promise: fs } = require('fs');
const { join } = require('path');

const PATH = join(__dirname, '..', 'talker.json');

const readFileTalker = () => {
  try {
    const content = fs.readFile(PATH, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.log(error.message);
    return undefined;
  }
};

module.exports = {
  readFileTalker,
};
