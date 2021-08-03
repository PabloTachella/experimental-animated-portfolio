import React from 'react'
import '../assets/styles/components/Presentation.css'

const Presentation = () => {
    return (
        <div className="b-presentation">
            <div className="b-presentation__section">
                <div className="b-presentarion_background"></div>
                <h1 className="b-presentation__title">¡Hola! soy Pablo Tachella</h1>
                <h2 className="b-presentation__subtitle">Frontend Developer</h2>
            </div>
            <div className="b-presentation__section ">
                <div className="b-presentarion_background"></div>
                <p className="b-presentation__text">
                    Veamos un poco de lo que<br />
                    podemos hacer utilizando solo CSS
                </p>
                <button className="b-presentation__button">COMENCEMOS</button>
            </div>
        </div>
    )
}

export default Presentation
