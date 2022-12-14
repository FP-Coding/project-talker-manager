const { promises: fs } = require('fs');
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
    await fs.writeFile(PATH, JSON.stringify(content));
    return true;
  } catch (error) {
    console.log(error.message);
    return undefined;
  }
};

const addNewTalker = async (content) => {
  try {
    const talkers = await readFileTalker();
    const newTalker = {
      id: talkers.length + 1,
      ...content,
    };
    const updatedFile = [
      ...talkers,
      newTalker,
    ]; 
    await writeFileTalker(updatedFile);
    return newTalker; 
  } catch (error) {
    console.log(error.message);
    return undefined;
  }
};

const updateTalkerById = async (content, id) => {
  try {
    const talkers = await readFileTalker();
    const updateTalker = talkers.map((talker) => {
      if (talker.id === id) {
        return {
          ...talker,
          ...content,
        };
      }
      return talker;
    });
    await writeFileTalker(updateTalker);
    return updateTalker.find(({ id: idTalker }) => idTalker === id);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const deleteTalkerById = async (id) => {
  try {
    const talkers = await readFileTalker();
    const talkersUpdated = talkers.filter(({ id: idTalker }) => idTalker !== id);
    console.log(id);
    await writeFileTalker(talkersUpdated);
    return true;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

module.exports = {
  readFileTalker,
  addNewTalker,
  updateTalkerById,
  deleteTalkerById,
};
