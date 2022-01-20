import React from "react";

function PopupWithForm({ name, title, isOpen, onClose, buttonText, confirmationButtonClass, confirmationTitleClass, children }) {
    return (
        <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
            <div className="popup__container">
                <form action="#" className="popup__form" name={`myForm${name}`}>
                    <button aria-label="Close" type="button" className="close-button" onClick={onClose}></button>
                    <h2 className={`popup__title ${confirmationTitleClass}`}>{title}</h2>
                    {children}
                    <button type="submit" className={`submit-button ${confirmationButtonClass} popup__button`} >{buttonText}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;