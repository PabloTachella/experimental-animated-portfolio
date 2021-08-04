import moon from '../assets/static/moon.png'
import stars from '../assets/static/stars.png'
import React from 'react'
import '../assets/styles/components/Animation.css'

const Animation = () => {
    return (
        <div className="b-animation">
            <div className="sky1"></div>
            <div className="sky2"></div>
            <div className="sky3"></div>
            <div className="sky4"></div>
            <div style={{ backgroundImage: `url(${stars})` }} className="stars"></div>
            <img src={moon} className="moon"></img>
            <div className="brightness">
                <div className="sun"></div>
            </div>
        </div>
    )
}

export default Animation