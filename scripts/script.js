let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');

function popupOpen (event) {
  event.preventDefault();
  popup.classList.add('popup__open');
}

editButton.addEventListener('click', popupOpen);

function popupClose (event){
  event.preventDefault();
  popup.classList.remove('popup__open');
}

closeButton.addEventListener('click', popupClose);

let formElement = document.querySelector('.popup__form')
let nameInput = document.querySelector('.popup__input_type_name')
let jobInput = document.querySelector('.popup__input_type_job') // Воспользуйтесь инструментом .querySelector()

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    let nameValue = nameInput.value;
    let jobValue = jobInput.value;
    let profileName = document.querySelector('.profile__name');
    let profileJob = document.querySelector('.profile__profession');
    profileName.textContent=nameValue;
    profileJob.textContent=jobValue;
}

formElement.addEventListener('submit', handleFormSubmit); 
formElement.addEventListener('submit', popupClose); 