import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit, isLoading, startLoading }) {

    const [cardName, setCardName] = useState('')
    const [link, setLink] = useState('')

    function handleNameCardChange(evt) {
        setCardName(evt.target.value);
    }

    function handleLinkChange(evt) {
        setLink(evt.target.value);
    }

    function handleSubmit(evt) {
        startLoading()
        evt.preventDefault()
        onAddPlaceSubmit({ cardName, link })
    }

    React.useEffect(() => {
        setCardName('');
        setLink('');
    }, [isOpen]);


    return (
        <PopupWithForm name="add" title="New place" isOpen={isOpen} onClose={onClose} buttonText={"Create"} loadingText={"Saving.."} isLoading={isLoading} onSubmit={handleSubmit}>
            <input type="text" id="title-input" name="title" className="popup__input popup__input_field_title"
                placeholder="Title" required minLength="2" maxLength="30" value={cardName} onChange={handleNameCardChange} />
            <span id="title-input-error"></span>
            <input type="url" id="link-input" name="link" className="popup__input popup__input_field_link"
                placeholder="Image link" required value={link} onChange={handleLinkChange} />
            <span id="link-input-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;