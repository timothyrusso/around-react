import React from "react";
import PopupWithForm from "./PopupWithForm";

function DeleteConfirmPopup({ isOpen, onClose, card, deleteCard }) {

    function handleSubmit(evt) {
        evt.preventDefault();
        deleteCard(card)
    }

    return (
        <PopupWithForm name="delete-card" title="Are you sure?" confirmationButtonClass={"submit-button_type_delete-card"} confirmationTitleClass={"popup__title_type_delete-card"} isOpen={isOpen} onClose={onClose} buttonText={"Yes"} onSubmit={handleSubmit} />
    )
}

export default DeleteConfirmPopup;