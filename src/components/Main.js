import React from 'react';

function Main(props) {
    return (
        <main className="main">
            <section className="profile">
                <div className="profile__image-wrapper" onClick={props.onEditAvatarClick}>
                    <img src="#" alt="Avatar of the page profile" className="profile__image" />
                    <button aria-label="Edit" type="button" className="profile-image-button"></button>
                </div>
                <div className="profile__wrapper">
                    <h1 className="profile__name"></h1>
                    <button aria-label="Edit" type="button" className="edit-button"></button>
                    <p className="profile__about-me"></p>
                </div>
                <button aria-label="Add" type="button" className="add-button"></button>
            </section>

            <section className="gallery">
                <ul className="cards-grid"></ul>
            </section>
            {props.children}
        </main>
    )
}

export default Main;