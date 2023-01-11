const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_edit');
const closeButton = popupEdit.querySelector('.popup__close-button');
const formEditElement = document.querySelector('.popup__form')
const nameInput = document.querySelector('.popup__input_type_name')
const jobInput = document.querySelector('.popup__input_type_job')
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__profession');

const popupPlace = document.querySelector('.popup_image')
const popupPlaceOpenButton = document.querySelector('.profile__add-button')
const popupPlaceCloseButton = popupPlace.querySelector('.popup__close-button')
const placeTitleInput = document.querySelector('.popup__input_type_title')
const placeLinkInput = document.querySelector('.popup__input_type_link')
const placeForm = popupPlace.querySelector('.popup__form')

const popupImageIncrease = document.querySelector('.popup_increase')
const popupImageIncreasCloseButton = popupImageIncrease.querySelector('.popup__close-button_increase')
const increasedImage = popupImageIncrease.querySelector('.popup__image')
const increasedImageSubtitle = popupImageIncrease.querySelector('.popup__subtitle')

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

const cardsPlace = document.querySelector('.places')
const template = document.querySelector('#place-template')
const place = template.content.querySelector('.card')

function addCard(info) {
  const place = template.content.querySelector(".card").cloneNode(true);
  place.querySelector('.card__title').textContent = info.name;
  const placeImage = place.querySelector('.card__photo')
  placeImage.src = info.link;
  placeImage.alt = `${info.name}.`;
  placeImage.addEventListener("click", () => {
    openPopup(popupImageIncrease);
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
  cardsPlace.append(addCard(info));
}

initialCards.forEach((info) => {
  addPlaces(info);
})

function addCardForm(evt) {
  evt.preventDefault();

  const info = {
    name: placeTitleInput.value,
    link: placeLinkInput.value,
  };

  cardsPlace.prepend(addCard(info));

  closePopup(popupPlace);

  placeTitleInput.value = '';
  placeLinkInput.value = '';
}

placeForm.addEventListener("submit", addCardForm);

function handleFormSubmit (evt) {
  evt.preventDefault(); 
  profileName.textContent=nameInput.value;
  profileJob.textContent=jobInput.value;
  closePopup(popupEdit);
}

function openPopup(popup) {
  popup.classList.add("popup_open");
}

function closePopup(popup) {
  popup.classList.remove("popup_open");
  console.log()
}

formEditElement.addEventListener('submit', handleFormSubmit); 
editButton.addEventListener('click', () => {
  openPopup(popupEdit);
  nameInput.value=profileName.textContent;
  jobInput.value=profileJob.textContent;
})
closeButton.addEventListener('click', () => {
  closePopup(popupEdit)
})
popupPlaceOpenButton.addEventListener('click', () => {
  openPopup(popupPlace);
})
popupPlaceCloseButton.addEventListener('click', () => {
  closePopup(popupPlace);
})
popupImageIncreasCloseButton.addEventListener('click', () => {
  closePopup(popupImageIncrease);
})


