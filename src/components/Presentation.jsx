import React from 'react'
import {connect} from 'react-redux'
import { startAnimation } from '../actions'
import Button from './Button'
import '../assets/styles/components/Presentation.css'

const Presentation = ({startAnimation}) => {
    return (
        <div className="b-presentation">
            <div className="b-presentation__section">
                <div className="b-presentarion_background"></div>
                <h1 className="b-presentation__title">¡Hola! soy Pablo Tachella</h1>
                <h2 className="b-presentation__subtitle">Frontend Developer</h2>
            </div>
            <div className="b-presentation__section">
                <div className="b-presentarion_background"></div>
                <p className="b-presentation__text">
                    Veamos un poco de lo que<br />
                    podemos hacer utilizando solo CSS
                </p>
                <div className="b-presentation__container-button">
                    <Button click={() => startAnimation(true)} text="COMENCEMOS"/>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    startAnimation
}

export default connect(null, mapDispatchToProps)(Presentation)
