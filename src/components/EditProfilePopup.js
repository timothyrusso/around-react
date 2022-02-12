import React, { useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import Input from "./Input";


function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading, startLoading, inputValidity, checkValidity }) {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const currentUser = useContext(CurrentUserContext)

  function handleNameChange(evt) {
    checkValidity(evt)
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    checkValidity(evt)
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    startLoading()
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
  }, [currentUser, isOpen]);

  return (
    <PopupWithForm name="edit" title="Edit profile" isOpen={isOpen} onClose={onClose} buttonText={"Save"} loadingText={"Saving.."} isLoading={isLoading} onSubmit={handleSubmit} inputValidity={inputValidity}>
      <Input type={"text"} idName={"name-input"} name={"name"} fieldName={"field_name"} placeholder={"Name"} minLength={"2"} maxLength={"40"} value={name} onChange={handleNameChange} />
      <Input type={"text"} idName={"aboutMe-input"} name={"aboutMe"} fieldName={"field_about-me"} placeholder={"Description"} minLength={"2"} maxLength={"200"} value={description} onChange={handleDescriptionChange} />
    </PopupWithForm>
  )
}


export default EditProfilePopup;
