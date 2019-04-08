const axios = jest.genMockFromModule('axios');

let synonyms = [];
let rejectFlag = false;

const _addSynonym = synonym => {
  synonyms.push({ word: synonym, score: 1 });
}

const _setRejectionFlag = rejectionFlag => {
  rejectFlag = rejectionFlag;
}

const _resetSynonyms = () => {
  synonyms = [];
  rejectFlag = false;
}

const get = () => (
  new Promise((resolve, reject) => {
    if (rejectFlag) {
      reject('Something went wrong');
    } else {
      resolve({ data: synonyms });
    }
  })
);

axios.get = get;

axios._addSynonym = _addSynonym;
axios._setRejectionFlag = _setRejectionFlag;
axios._resetSynonyms = _resetSynonyms;

module.exports = axios;
