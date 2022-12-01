let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form')
let nameInput = document.querySelector('.popup__input_type_name')
let jobInput = document.querySelector('.popup__input_type_job')
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__profession');

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

editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
formElement.addEventListener('submit', handleFormSubmit); 