let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form')
let nameInput = document.querySelector('.popup__input_type_name')
let jobInput = document.querySelector('.popup__input_type_job')
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__profession');

const popupPlace = document.querySelector('.popup-place')
const popupPlaceOpenButton = document.querySelector('.profile__add-button')
const popupPlaceCloseButton = document.querySelector('.popup-place__close-button')
const popupPlaceSaveButton = document.querySelector('.popup-place__save-bottom')
const placeTitleInput = document.querySelector('.popup-place__input_type_title')
const placeLinkInput = document.querySelector('.popup-place__input_type_link')
const placeForm = document.querySelector('.popup-place__form')

const popupImageIncrease = document.querySelector('.popup-increase')
const popupImageIncreasClose = document.querySelector('.popup-increase__close-button')
const increasedImage = document.querySelector('.popup-increase__image')
const increasedImageSubtitle = document.querySelector('.popup-increase__subtitle')

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

const cardsplace = document.querySelector('.places')
const template = document.querySelector('#place-template')
const place = template.content.querySelector('.card')

function addCard(info) {
  const place = template.content.querySelector(".card").cloneNode(true);
  place.querySelector('.card__title').textContent = info.name;
  const placeImage = place.querySelector('.card__photo')
  placeImage.src = info.link;
  placeImage.alt = `${info.name}.`;
  placeImage.addEventListener("click", () => {
    popupIncreaseOpen(popupImageIncrease);
    increasedImage.src = info.link;
    increasedImage.alt = `${info.name}.`;
    increasedImageSubtitle.textContent = info.name;
  })
  place.querySelector('.card__like-btn').addEventListener("click", (evt) => {
    evt.target.classList.toggle('card__like-btn_acrive');
  });
  place.querySelector('.card__delete').addEventListener("click", () => {
    place.remove();
  });
  return place;
}

const addPlaces = (info) => {
  cardsplace.append(addCard(info));
}

initialCards.forEach((info) => {
  addPlaces(info);
})

function AddCardForm(evt) {
  evt.preventDefault();

  const info = {
    name: placeTitleInput.value,
    link: placeLinkInput.value,
  };

  cardsplace.prepend(addCard(info));

  popupPlaceClose();

  placeTitleInput.value = '';
  placeLinkInput.value = '';
}

placeForm.addEventListener("submit", AddCardForm);

function popupOpen () {
  popup.classList.add('popup_open');
  nameInput.value=profileName.textContent;
  jobInput.value=profileJob.textContent;
}

function popupClose (){
  popup.classList.remove('popup_open');
}

function handleFormSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent=nameInput.value;
  profileJob.textContent=jobInput.value;
  popupClose();
}

function popupPlaceOpen (){
  popupPlace.classList.add('popupPlace__open');
}

function popupPlaceClose (){
  popupPlace.classList.remove('popupPlace__open');
}

function popupIncreaseOpen (){
  popupImageIncrease.classList.add('popup-increase__open')
}

function popupIncreaseClose (){
  popupImageIncrease.classList.remove('popup-increase__open')
}

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
formElement.addEventListener('submit', handleFormSubmit); 
popupPlaceOpenButton.addEventListener('click', popupPlaceOpen)
popupPlaceCloseButton.addEventListener('click', popupPlaceClose)
popupImageIncreasClose.addEventListener('click', popupIncreaseClose)