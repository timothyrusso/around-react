import React from 'react';

function ImagePopup({ card, onClose }) {
    return (
        <div className={`popup popup_type_preview ${card ? 'popup_opened' : ''}`}>
            <div className="popup__container popup__container_type_preview">
                <button aria-label="Close" type="button" className="close-button" onClick={onClose}></button>
                <img className="popup__preview-image" src={card ? card.link : ''} alt={card ? card.name : ''} />
                <figcaption className="popup__caption">{card ? card.name : ''}</figcaption>
            </div>
        </div>
    )
}

export default ImagePopup;