import React from 'react';

function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name}`}>
            <div className="popup__container">
                <form action="#" className="popup__form" name={`myForm${props.name}`}>
                    <button aria-label="Close" type="button" className="close-button"></button>
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;