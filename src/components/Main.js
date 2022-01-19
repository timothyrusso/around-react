import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([])

    React.useEffect(() => {
        api.getProfileInfo()
            .then((info) => {
                setUserName(info.name)
                setUserDescription(info.about)
                setUserAvatar(info.avatar)
            })
            .catch((err) => {
                console.log(err);
            })
    })

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
                <div className="profile__image-wrapper" onClick={props.onEditAvatarClick}>
                    <img src={userAvatar} alt="Avatar of the page profile" className="profile__image" />
                    <button aria-label="Edit" type="button" className="profile-image-button"></button>
                </div>
                <div className="profile__wrapper">
                    <h1 className="profile__name">{userName}</h1>
                    <button aria-label="Edit" type="button" className="edit-button" onClick={props.onEditProfileClick}></button>
                    <p className="profile__about-me">{userDescription}</p>
                </div>
                <button aria-label="Add" type="button" className="add-button" onClick={props.onAddPlaceClick}></button>
            </section>

            <section className="gallery">
                <ul className="cards-grid">
                    {cards.map(card => {
                        return (
                            <Card key={card._id} name={card.name} link={card.link} card={props.card} onClick={props.onCardClick} />
                        )
                    })}
                </ul>
            </section>
            {props.children}
        </main>
    )
}

export default Main;