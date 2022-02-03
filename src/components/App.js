import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(undefined)
  const [currentUser, setCurrentUser] = useState("")

  const [cards, setCards] = React.useState([])

  function handleCardLike(card) {
      // Check one more time if this card was already liked
      const isLiked = card.likes.some(i => i._id === currentUser._id);

      /* Send a request to the API and getting the updated card data:

      1. Tell the server I like the card identified by card._id.
      2. Then we need to reset that state variable that is our cards array.
         First we need to update the cards array with our newly liked card.
         Array.map will allow us to do that. What it does,
         is iterate over each item in an array and perform some function (from a callback)
         in order to update each item in the array.
         We'll iterate over the current value of cards and update the value based on whether
         it was the card that was just liked or not. Only one card will be updated in the array.
      3. The callback for the map does this: if the _id of the array item is the same as this card
         (this card is the card fed in as an argument to the parent function handleLikeCard)
         update that array item with the data of the card object returned just now from the server.
         If it isn't, return the array item, thus keeping the array item unchanged.

         If all this works, only the card that was liked will updated in the array,
         and since the cards state variable changes, the card will re-render with the proper
         liked status.

      */
      api.changeLikeCardStatus({ cardId: card._id, isLiked }).then((newCard) => {
          setCards((state) => state.map((item) => item._id === card._id ? newCard : item));
      });
  }

  function handleCardDelete(card) {
      api.deleteCards({ cardId: card._id }).then(() => {
          setCards((state) => state.filter((item) => item._id !== card._id));
      });
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

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

  function handleUpdateUser(currentUser) {
    api.saveProfileInfo({ name: currentUser.name, about: currentUser.about })
      .then((info) => {
        setCurrentUser(info)
        closeAllPopups()
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleUpdateAvatar(currentUser) {
    api.saveProfileImage({ avatar: currentUser.avatar })
      .then((info) => {
        setCurrentUser(info)
        closeAllPopups()
      })
      .catch((err) => {
        console.log(err);
      })
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

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="content">
        <Header />
        <Main onEditAvatarClick={handleEditAvatarClick} onEditProfileClick={handleEditProfileClick} onAddPlaceClick={handleAddPlaceClick} onCardClick={handleCardClick} onDeleteClick={handleConfirmationClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete}>
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <PopupWithForm name="add" title="New place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText={"Create"}>
            <input type="text" id="title-input" name="title" className="popup__input popup__input_field_title"
              placeholder="Title" required minLength="1" maxLength="30" />
            <span id="title-input-error"></span>
            <input type="url" id="link-input" name="link" className="popup__input popup__input_field_link"
              placeholder="Image link" required />
            <span id="link-input-error"></span>
          </PopupWithForm>
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
          <PopupWithForm name="delete-card" title="Are you sure?" confirmationButtonClass={"submit-button_type_delete-card"} confirmationTitleClass={"popup__title_type_delete-card"} isOpen={isConfirmationPopupOpen} onClose={closeAllPopups} buttonText={"Yes"} />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </Main>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
