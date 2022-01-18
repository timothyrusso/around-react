import React from 'react';

function ImagePopup() {
    return (
        <div class="popup popup_type_preview">
            <div class="popup__container popup__container_type_preview">
                <button aria-label="Close" type="button" class="close-button"></button>
                <img class="popup__preview-image" src="#" alt="#" />
                    <figcaption class="popup__caption"></figcaption>
            </div>
        </div>
    )
}

export default ImagePopup;