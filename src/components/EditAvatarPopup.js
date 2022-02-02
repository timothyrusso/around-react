import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

    const avatarRef = useRef()

    function handleSubmit(evt) {
        evt.preventDefault();

        onUpdateAvatar({
            avatar: avatarRef.current.value
        });
    }

    return (
        <PopupWithForm name="profile-image" title="Change profile picture" isOpen={isOpen} onClose={onClose} buttonText={"Create"} onSubmit={handleSubmit}>
            <input type="url" id="image-link-input" name="link" className="popup__input popup__input_image_link"
                placeholder="Image link" required ref={avatarRef} />
            <span id="image-link-input-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;