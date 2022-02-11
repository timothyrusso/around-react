// import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";
import ImageInput from "./ImageInput";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading, startLoading }) {

  // const avatarRef = useRef()

  function handleSubmit(evt) {
    startLoading()
    evt.preventDefault()

    // onUpdateAvatar({
    //   avatar: avatarRef.current.value
    // });
  }

  return (
    <PopupWithForm name="profile-image" title="Change profile picture" isOpen={isOpen} onClose={onClose} buttonText={"Create"} loadingText={"Saving.."} isLoading={isLoading} onSubmit={handleSubmit}>
      <ImageInput type={"url"} idName={"image-link-input"} name={"link"} fieldName={"image_link"} placeholder={"Image link"} onUpdate={onUpdateAvatar} />
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
