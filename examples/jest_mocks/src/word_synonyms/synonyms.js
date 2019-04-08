const axios = require('axios');

const getSynonyms = async(word) => {
  const url = `https://api.datamuse.com/words?rel_syn=${word}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch(error) {
    return "Sorry, something went wrong";
  }
}

module.exports = getSynonyms;
