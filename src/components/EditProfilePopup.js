import React, { useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const currentUser = useContext(CurrentUserContext)

    function handleNameChange(evt) {
        setName(evt.target.value);
    }

    function handleDescriptionChange(evt) {
        setDescription(evt.target.value);
    }

    function handleSubmit(evt) {
        // Prevent the browser from navigating to the form address
        evt.preventDefault();

        // Pass the values of the managed components to the external handler
        onUpdateUser({
            name,
            about: description,
        });
    }

    React.useEffect(() => {
        setName(currentUser.name || '');
        setDescription(currentUser.about || '');
    }, [currentUser]);

    return (
        <PopupWithForm name="edit" title="Edit profile" isOpen={isOpen} onClose={onClose} buttonText={"Save"} onSubmit={handleSubmit}>
            <input type="text" id="name-input" name="name" className="popup__input popup__input_field_name" placeholder="Name" required
                minLength="2" maxLength="40" value={name} onChange={handleNameChange} />
            <span id="name-input-error"></span>
            <input type="text" id="aboutMe-input" name="aboutMe" className="popup__input popup__input_field_about-me" placeholder="Description" required
                minLength="2" maxLength="200" value={description} onChange={handleDescriptionChange} />
            <span id="aboutMe-input-error"></span>
        </PopupWithForm>
    )
}


export default EditProfilePopup;