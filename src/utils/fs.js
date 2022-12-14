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
    return await writeFileTalker(updatedFile);
  } catch (error) {
    console.log(error.message);
    return undefined;
  }
};

const updateTalkerById = async (content, id) => {
  try {
    const talkers = await readFileTalker();
    const updateTalker = talkers.map((talker) => {
      if (talker.id === Number(id)) {
        return {
          id,
          ...content,
        };
      }
      return talker;
    });
    return await writeFileTalker(updateTalker);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

module.exports = {
  readFileTalker,
  addNewTalker,
  updateTalkerById,
};
