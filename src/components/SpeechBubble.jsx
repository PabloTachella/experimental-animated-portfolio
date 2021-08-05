import React from 'react'
import '../assets/styles/components/SpeechBubble.css'

const SpeechBubble = () => {
    return (
        <div className="container-bubble">
            <div className="bubble-start"></div>
            <div className="bubble">
                <div className="bubble__text"></div>
            </div>
        </div>
    )
}

export default SpeechBubble