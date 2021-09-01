import React from 'react'
import home from '../assets/static/icons/home.png'
import portfolio from '../assets/static/icons/portfolio.png'
import profile from '../assets/static/icons/profile.png'
import '../assets/styles/components/Navbar.css'

const Navbar = () => {
    return(
        <nav className="b-navbar">
            <ul className="b-navbar__list">
                <li className="b-navbar__item b-navbar__home">
                    <div className="b-navbar__marker"></div>
                    <img className="b-navbar__icons" src={home} alt="home" />
                    <h2 className="b-navbar__text">Inicio</h2>
                </li>
                <li className="b-navbar__item b-navbar__portfolio">
                    <div className="b-navbar__marker"></div>
                    <img className="b-navbar__icons" src={portfolio} alt="portfolio" />
                    <h2 className="b-navbar__text">portafolio</h2>
                </li>
                <li className="b-navbar__item b-navbar__profile">
                    <div className="b-navbar__marker"></div>
                    <img className="b-navbar__icons" src={profile} alt="profile" />
                    <h2 className="b-navbar__text">Sobre mi</h2>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar