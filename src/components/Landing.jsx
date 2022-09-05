import React from 'react'
import UndrawBooks from '../assets/Undraw_Books.svg';

const Landing = () => {
    return (
        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Jamaica's most awarded online streaming platform</h1>
                        <h2>Find your dream show with <span className="white">Library</span></h2>
                        <a href="#features">
                            <button className="btn">Browse shows</button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={UndrawBooks} alt="" />
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Landing;