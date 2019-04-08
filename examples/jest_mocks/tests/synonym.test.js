const getSynonyms = require('../src/word_synonyms/synonyms.js');
const axios = require('axios');

describe('getSynonyms', () => {
  beforeEach(() => {
    for (let i = 1; i<= 10; i++) {
      axios._addSynonym('Synonym' + i);
    }
  });

  afterEach(function() {
    axios._resetSynonyms();
  });

  test('returns synonyms for a given word', async () => {
    const synonyms = await getSynonyms('car');
    console.warn(synonyms);
    expect(synonyms.length).toBeGreaterThan(0);
  });

  test('returns error message when there is a problem', async () => {
    axios._setRejectionFlag(true);

    const synonyms = await getSynonyms('car');
    console.warn(synonyms);
    expect(synonyms).toBe('Sorry, something went wrong');
  });
});
