import React from "react";

function Card({ card, onCardClick, onDeleteClick }) {

    function handleClick() {
        onCardClick(card)
    }

    return (
        <li className="card">
            <button aria-label="Delete" type="button" className="card__delete" onClick={onDeleteClick}></button>
            <div className="card__image" style={{ backgroundImage: `url(${card.link})` }} onClick={handleClick}></div>
            <div className="card__content">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-wrapper">
                    <button aria-label="Like" type="button" className="card__like"></button>
                    <p className="card__like-counter">{card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card;