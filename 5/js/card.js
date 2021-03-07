import {createOffers} from './offer.js';

const mapCanvas = document.querySelector('.map__canvas');
const offerTemplate = document.querySelector('#card').content.querySelector('.popup');

const offerShow = createOffers();

const offerFragment = document.createDocumentFragment();

offerShow.forEach((offers) => {
  const newOfferElement = offerTemplate.cloneNode(true);

  newOfferElement.querySelector('.popup__title').textContent = offers.offer.title;
  newOfferElement.querySelector('.popup__text--address').textContent = offers.offer.address;
  newOfferElement.querySelector('.popup__text--price').textContent = offers.offer.price;
  newOfferElement.querySelector('.popup__type').textContent = offers.offer.type;
  newOfferElement.querySelector('.popup__text--capacity').textContent = offers.offer.rooms + ' комнаты для ' + offers.offer.guests + ' гостей.';
  newOfferElement.querySelector('.popup__text--time').textContent = ' Заезд после ' + offers.offer.checkin + ', выезд до ' + offers.offer.checkout;
  newOfferElement.querySelector('.popup__features').textContent = offers.offer.features;
  newOfferElement.querySelector('.popup__description').textContent = offers.offer.description;
  newOfferElement.querySelector('.popup__photos').src = offers.offer.photos;  
  newOfferElement.querySelector('.popup__avatar').src = offers.author.avatar;
  
  offerFragment.appendChild(newOfferElement);
});

mapCanvas.appendChild(offerFragment);