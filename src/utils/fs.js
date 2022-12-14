const { promise: fs } = require('fs');
const { join } = require('path');

const PATH = join(__dirname, '..', 'talker.json');

const readFileTalker = async () => {
  try {
    const content = await fs.readFile(PATH, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.log(error.message);
    return undefined;
  }
};

const writeFileTalker = async (content) => {
  try {
    const talkers = readFileTalker();
    const newTalker = {
      id: talkers.length + 1,
      ...content,
    };
    const updatedFile = [
      ...talkers,
      newTalker,
    ]; 
    await fs.writeFile(PATH, JSON.stringify(updatedFile));
    return JSON.parse(content);
  } catch (error) {
    console.log(error.message);
    return undefined;
  }
};

module.exports = {
  readFileTalker,
  writeFileTalker,
};
