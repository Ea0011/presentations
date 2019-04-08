const getSynonyms = require('./word_synonyms/synonyms');
const fn = require('./jest_fn/jest_fn');

// getSynonyms('car').then(synonyms => {
//   console.log(synonyms);
// });

// const random = fn(() => 4);
  
// console.warn(random());
// console.warn(random(4, 5));
// console.warn(random('argument'));

// console.warn(random.mock);

// const AnimalMock = fn(function(name) {
//    this.name = name;
// });

// const dog = new AnimalMock('Husky');

// console.warn(dog);
// console.warn(AnimalMock.mock);

class Car {
  constructor(topSpeed, mark) {
    this.topSpeed = topSpeed;
    this.mark = mark;
  }
}

const CarMock = fn(Car);
const ferrari = new CarMock(380, 'Ferrari');

console.warn(ferrari);
console.warn(CarMock.mock);
