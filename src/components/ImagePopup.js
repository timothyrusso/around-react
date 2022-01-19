import React from 'react';

function ImagePopup(props) {
    return (
        <div className={`popup popup_type_${props.name} ${props.selectedCard ? 'popup_opened' : ''}`}>
            <div className="popup__container popup__container_type_preview">
                <button aria-label="Close" type="button" className="close-button" onClick={props.onClose}></button>
                <img className="popup__preview-image" src="#" alt="#" />
                    <figcaption className="popup__caption"></figcaption>
            </div>
        </div>
    )
}

export default ImagePopup;