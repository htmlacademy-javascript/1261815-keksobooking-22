const getRandomNumber = function (from, to, signsQuantity) {
  if(from > to || from == to) {
    throw new Error('Значение "от" не может быть больше или равнятся значению "до"!');
  }

  if (from < 0 || to < 0 ) {
    throw new Error('Значения не могут быть меньше нуля!');
  }

  let rand = from + Math.random() * (to - from);
  return rand.toFixed(signsQuantity);

}

const AVATAR = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
];

const TITLE = [
  'Скидка 10% Молодожёнам',
  'Квартира в новстройке',
  'Квартира с ремонотом',
  'Новый жилой комплекс',
];


const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher', 
  'parking', 
  'washer', 
  'elevator', 
  'conditioner',
];

const DESCRIPTION = [
  '2-комн. квартира, 54,7 м²',
  '4-комн. квартира 84,1 м²',
  '1-комн. квартира, 45,2 м²',
  '1-комн. квартира, 37 м²',
  'Многокомнатная квартира, 426 м²',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg', 
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const NEW_OFFER_COUNT = 10;

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
}

const createOffer = () => {
  let addressX = getRandomNumber(0, 180);
  let addressY = getRandomNumber(0, 180);
  let price = getRandomNumber(500000, 1400000);
  let rooms = getRandomNumber(1, 8);
  let guests = getRandomNumber(1, 16);
  let locationX = getRandomNumber(35.65000, 35.70000, 5);
  let locationY =getRandomNumber(139.70000, 139.80000, 5);

  return {
    author: getRandomArrayElement(AVATAR),
    offer: 
    getRandomArrayElement(TITLE) + ' Координата X: ' +
    addressX + ' Координата Y: ' + 
    addressY + ' Цена: ' +
    price + 'р ' + 
    getRandomArrayElement(TYPE) + ' Количество комнат: ' +
    rooms + ' Количество гостей: ' +
    guests + ' ' +
    getRandomArrayElement(CHECKIN) + ' ' + 
    getRandomArrayElement(CHECKOUT) + ' ' + 
    FEATURES.slice(0, getRandomNumber(0, FEATURES.length)) + ' ' +
    getRandomArrayElement(DESCRIPTION) + ' ' +
    PHOTOS.slice(0, getRandomNumber(0, PHOTOS.length)),
    location: 
    'Координата X: ' + locationX + ' ' +
    'Координата Y: ' + locationY,
  }
};

const newOffer = new Array(NEW_OFFER_COUNT).fill(null).map(() => createOffer());

newOffer;