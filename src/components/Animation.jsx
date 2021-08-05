import React, { useEffect } from 'react'
import Buho from './Buho'
import moon from '../assets/static/moon.png'
import stars from '../assets/static/stars.png'
import '../assets/styles/components/Animation.css'

const Animation = () => {
    useEffect(() => {
        let eye = document.getElementsByClassName('eye')
        let buho = document.getElementsByClassName('head-and-body')[0]
        let belly = document.getElementsByClassName('belly')[0]
        let body = document.getElementsByClassName('body')[0]

        eye[0].addEventListener("animationend", listener, false);
        eye[1].addEventListener("animationend", listener, false);

        buho.classList.add('get-up')
        belly.classList.add('get-up-belly')
        body.classList.add('get-up-belly')
        eye[0].classList.add('awakening-eye')
        eye[1].classList.add('awakening-eye')

        function listener(e) {
            eye[0].classList.add('blink')
            eye[1].classList.add('blink')
        }
    })
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
            <Buho />
        </div>
    )
}

export default Animation