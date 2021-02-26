import {getRandomNumber} from './random-number.js';

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
}

export {getRandomArrayElement};