import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading, startLoading }) {

  const avatarRef = useRef()

  function handleSubmit(evt) {
    startLoading()
    evt.preventDefault()

    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm name="profile-image" title="Change profile picture" isOpen={isOpen} onClose={onClose} buttonText={"Create"} loadingText={"Saving.."} isLoading={isLoading} onSubmit={handleSubmit}>
      <input type="url" id="image-link-input" name="link" className="popup__input popup__input_image_link" placeholder="Image link" ref={avatarRef} required />
      <span id="image-link-input"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
