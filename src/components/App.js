import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false)
  }

  React.useEffect(() => {
    document.body.classList.add("page");

    return () => {
      document.body.classList.remove("page");
    };
  })

  return (
    <>
      <div className="content">
        <Header />
        <Main onEditAvatarClick={handleEditAvatarClick}>
          <PopupWithForm name="edit" title="Edit profile">
            <input type="text" id="name-input" name="name" className="popup__input popup__input_field_name" required
              minLength="2" maxLength="40" />
            <span id="name-input-error"></span>
            <input type="text" id="aboutMe-input" name="aboutMe" className="popup__input popup__input_field_about-me" required
              minLength="2" maxLength="200" />
            <span id="aboutMe-input-error"></span>
            <button type="submit" className="submit-button popup__button">Save</button>
          </PopupWithForm>
          <PopupWithForm name="add" title="New place">
            <input type="text" id="title-input" name="title" className="popup__input popup__input_field_title"
              placeholder="Title" required minLength="1" maxLength="30" />
            <span id="title-input-error"></span>
            <input type="url" id="link-input" name="link" className="popup__input popup__input_field_link"
              placeholder="Image link" required />
            <span id="link-input-error"></span>
            <button type="submit" className="submit-button popup__button">Create</button>
          </PopupWithForm>
          <PopupWithForm name="profile-image" title="Change profile picture" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
            <input type="url" id="image-link-input" name="link" className="popup__input popup__input_image_link"
              placeholder="Image link" required />
            <span id="image-link-input-error"></span>
            <button type="submit" className="submit-button popup__button">Create</button>
          </PopupWithForm>
          <PopupWithForm name="delete-card" title="Are you sure?">
            <button type="submit" className="submit-button submit-button_type_delete-card popup__button">Yes</button>
          </PopupWithForm>
          <ImagePopup />
        </Main>
        <Footer />
      </div>
    </>
  );
}

export default App;
