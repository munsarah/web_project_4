let popupWindow = document.querySelector(".popup");
let editForm = document.querySelector(".popup__form");
let editButton = document.querySelector(".profile__edit-button");
let closeButton = popupWindow.querySelector(".popup__close-icon");

let profileName = document.querySelector(".profile__name");
let profileTitle = document.querySelector(".profile__title");

let inputName = editForm.querySelector('[name="name"]');
let inputTitle = editForm.querySelector('[name="title"]');

function openPopup() {
  popupWindow.classList.add("popup_open");
  inputName.value = profileName.textContent;
  inputTitle.value = profileTitle.textContent;
}

function closePopup() {
  popupWindow.classList.remove("popup_open");
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileTitle.textContent = inputTitle.value;
  closePopup();
}

editForm.addEventListener("submit", handleProfileFormSubmit);
