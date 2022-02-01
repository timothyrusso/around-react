import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isEditProfilePopupOpen, closeAllPopups }) {

    return (
        <PopupWithForm name="edit" title="Edit profile" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} buttonText={"Save"}>
            <input type="text" id="name-input" name="name" className="popup__input popup__input_field_name" placeholder="Name" required
                minLength="2" maxLength="40" />
            <span id="name-input-error"></span>
            <input type="text" id="aboutMe-input" name="aboutMe" className="popup__input popup__input_field_about-me" placeholder="Description" required
                minLength="2" maxLength="200" />
            <span id="aboutMe-input-error"></span>
        </PopupWithForm>
    )
}


export default EditProfilePopup;