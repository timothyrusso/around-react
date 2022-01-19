import React from "react";

function Card(props) {

function handleClick() {
    props.onCardClick(props.card)
}

    return (
        <li className="card" key={props._id}>
            <button aria-label="Delete" type="button" className="card__delete"></button>
            <div className="card__image" style={{ backgroundImage: `url(${props.link})` }} alt={props.name} onClick={handleClick}></div>
            <div className="card__content">
                <h2 className="card__title">{props.name}</h2>
                <div className="card__like-wrapper">
                    <button aria-label="Like" type="button" className="card__like"></button>
                    <p className="card__like-counter"></p>
                </div>
            </div>
        </li>
    )
}

export default Card;