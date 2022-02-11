import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

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
            <Input type={"text"} idName={"title-input"} name={"title"} fieldName={"field_title"} placeholder={"Title"} minLength={"2"} maxLength={"30"} value={cardName} onChange={handleNameCardChange} />
            <Input type={"url"} idName={"link-input"} name={"link"} fieldName={"field_link"} placeholder={"Image link"} value={link} onChange={handleLinkChange} />
        </PopupWithForm>
    )
}

export default AddPlacePopup;