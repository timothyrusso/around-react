import React from 'react';

function ImagePopup() {
    return (
        <div className="popup popup_type_preview">
            <div className="popup__container popup__container_type_preview">
                <button aria-label="Close" type="button" className="close-button"></button>
                <img className="popup__preview-image" src="#" alt="#" />
                    <figcaption className="popup__caption"></figcaption>
            </div>
        </div>
    )
}

export default ImagePopup;