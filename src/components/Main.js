import React from "react";
import Card from "./Card";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditAvatarClick, onEditProfileClick, onAddPlaceClick, onCardClick, onDeleteClick, children }) {

    const currentUser = React.useContext(CurrentUserContext);

    const [cards, setCards] = React.useState([])

    function handleCardLike(card) {
        // Check one more time if this card was already liked
        const isLiked = card.likes.some(i => i._id === currentUser._id);

        /* Send a request to the API and getting the updated card data:

        1. Tell the server I like the card identified by card._id.
        2. Then we need to reset that state variable that is our cards array.
           First we need to update the cards array with our newly liked card. 
           Array.map will allow us to do that. What it does,
           is iterate over each item in an array and perform some function (from a callback)
           in order to update each item in the array. 
           We'll iterate over the current value of cards and update the value based on whether 
           it was the card that was just liked or not. Only one card will be updated in the array.
        3. The callback for the map does this: if the _id of the array item is the same as this card 
           (this card is the card fed in as an argument to the parent function handleLikeCard) 
           update that array item with the data of the card object returned just now from the server.
           If it isn't, return the array item, thus keeping the array item unchanged.
           
           If all this works, only the card that was liked will updated in the array, 
           and since the cards state variable changes, the card will re-render with the proper 
           liked status.

        */
        api.changeLikeCardStatus({ cardId: card._id, isLiked }).then((newCard) => {
            setCards((state) => state.map((item) => item._id === card._id ? newCard : item));
        });
    }

    React.useEffect(() => {
        api.getCards()
            .then((data) => {
                setCards(data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__image-wrapper" onClick={onEditAvatarClick}>
                    <img src={currentUser.avatar} alt="Avatar of the page profile" className="profile__image" />
                    <button aria-label="Edit" type="button" className="profile-image-button"></button>
                </div>
                <div className="profile__wrapper">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button aria-label="Edit" type="button" className="edit-button" onClick={onEditProfileClick}></button>
                    <p className="profile__about-me">{currentUser.about}</p>
                </div>
                <button aria-label="Add" type="button" className="add-button" onClick={onAddPlaceClick}></button>
            </section>

            <section className="gallery">
                <ul className="cards-grid">
                    {cards.map((card) =>
                        (<Card key={card._id} card={card} onCardClick={onCardClick} onDeleteClick={onDeleteClick} onCardLike={handleCardLike} />)
                    )}
                </ul>
            </section>
            {children}
        </main>
    )
}

export default Main;