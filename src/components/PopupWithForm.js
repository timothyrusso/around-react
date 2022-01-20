import React from 'react';

function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <form action="#" className="popup__form" name={`myForm${props.name}`}>
                    <button aria-label="Close" type="button" className="close-button" onClick={props.onClose}></button>
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                    <button type="submit" className={`submit-button popup__button ${props.confirmationClass}`} >{props.buttonText}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;