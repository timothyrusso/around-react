import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CardContext } from "../contexts/CardContext";

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(undefined)
  const [currentUser, setCurrentUser] = useState("")
  const [cards, setCards] = useState("")

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleConfirmationClick() {
    setIsConfirmationPopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsConfirmationPopupOpen(false)
    setSelectedCard(undefined)
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  React.useEffect(() => {
    api.getProfileInfo()
      .then((info) => {
        setCurrentUser(info)
      })
      .catch((err) => {
        console.log(err);
      })

    api.getCards()
      .then((data) => {
        setCards(data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  console.log(cards)

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CardContext.Provider value={cards}>
        <div className="content">
          <Header />
          <Main onEditAvatarClick={handleEditAvatarClick} onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick} onCardClick={handleCardClick} onDeleteClick={handleConfirmationClick}>
            <PopupWithForm name="edit" title="Edit profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText={"Save"}>
              <input type="text" id="name-input" name="name" className="popup__input popup__input_field_name" placeholder="Name" required
                minLength="2" maxLength="40" />
              <span id="name-input-error"></span>
              <input type="text" id="aboutMe-input" name="aboutMe" className="popup__input popup__input_field_about-me" placeholder="Description" required
                minLength="2" maxLength="200" />
              <span id="aboutMe-input-error"></span>
            </PopupWithForm>
            <PopupWithForm name="add" title="New place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText={"Create"}>
              <input type="text" id="title-input" name="title" className="popup__input popup__input_field_title"
                placeholder="Title" required minLength="1" maxLength="30" />
              <span id="title-input-error"></span>
              <input type="url" id="link-input" name="link" className="popup__input popup__input_field_link"
                placeholder="Image link" required />
              <span id="link-input-error"></span>
            </PopupWithForm>
            <PopupWithForm name="profile-image" title="Change profile picture" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonText={"Create"}>
              <input type="url" id="image-link-input" name="link" className="popup__input popup__input_image_link"
                placeholder="Image link" required />
              <span id="image-link-input-error"></span>
            </PopupWithForm>
            <PopupWithForm name="delete-card" title="Are you sure?" confirmationButtonClass={"submit-button_type_delete-card"} confirmationTitleClass={"popup__title_type_delete-card"} isOpen={isConfirmationPopupOpen} onClose={closeAllPopups} buttonText={"Yes"} />
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          </Main>
          <Footer />
        </div>
      </CardContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
