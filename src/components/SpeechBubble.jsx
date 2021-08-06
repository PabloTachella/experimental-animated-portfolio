import React from 'react'
import '../assets/styles/components/SpeechBubble.css'

const SpeechBubble = () => {
    return (
        <div className="container-bubble">
            <div className="bubble">
                <p className="bubble__text">¡Te doy la bienvenida!<br /> seré tu acompañante durante esta visita </p>
                <div className="dots">
                    <div className="dot dot1"></div>
                    <div className="dot dot2"></div>
                    <div className="dot dot3"></div>
                </div>
            </div>
            <div className="bubble-start"></div>
        </div>
    )
}

export default SpeechBubble