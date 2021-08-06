import React, { useEffect } from 'react'
import Buho from './Buho'
import moon from '../assets/static/moon.png'
import stars from '../assets/static/stars.png'
import '../assets/styles/components/Animation.css'

const Animation = () => {
    useEffect(() => {
        let buho = document.getElementsByClassName('head-and-body')[0]
        let body = document.getElementsByClassName('body')[0]
        let feet = document.getElementsByClassName('feet')
        let eye = document.getElementsByClassName('eye')
        let closedEye = document.getElementsByClassName('closed-eye')
        let z1 = document.getElementsByClassName('z1')[0]
        let z2 = document.getElementsByClassName('z2')[0]
        let z3 = document.getElementsByClassName('z3')[0]
        let belly = document.getElementsByClassName('belly')[0]
        let sky1 = document.getElementsByClassName('sky1')[0]
        let sky2 = document.getElementsByClassName('sky2')[0]
        let sky3 = document.getElementsByClassName('sky3')[0]
        let sky4 = document.getElementsByClassName('sky4')[0]
        let stars = document.getElementsByClassName('stars')[0]
        let moon = document.getElementsByClassName('moon')[0]
        let brightness = document.getElementsByClassName('brightness')[0]
        let branchs = document.getElementsByClassName('branchs')[0]
        let darkenSky = document.getElementsByClassName('darken-sky')[0]
        let containerBubble = document.getElementsByClassName('container-bubble')[0]
        let textDialogue = document.getElementsByClassName('bubble__text')[0]
        let dots = document.getElementsByClassName('dot')

        buho.addEventListener("animationend", goAnimation, false)

        buho.classList.add('translate-to-right')
        feet[0].classList.add('translate-to-right')
        feet[1].classList.add('translate-to-right')
        stars.classList.add('appear')
        moon.classList.add('appear')
        branchs.classList.add('translate-to-right')

        function goAnimation(ev) {
            eye[0].addEventListener("animationend", listener, false)
            eye[1].addEventListener("animationend", listener, false)
            brightness.addEventListener("animationend", goDialogue, false)

            stars.classList.replace('appear', 'fade-off')
            moon.classList.replace('appear', 'fade-off')
            buho.classList.replace('translate-to-right', 'get-up')

            closedEye[0].classList.add('closed-eye-a')
            closedEye[1].classList.add('closed-eye-a')
            eye[0].classList.add('awakening-eye')
            eye[1].classList.add('awakening-eye')
            z1.classList.add('zzz-a')
            z2.classList.add('zzz-a')
            z3.classList.add('zzz-a')
            body.classList.add('get-up-belly')
            belly.classList.add('get-up-belly')
            sky1.classList.add('sky1-a')
            sky2.classList.add('sky2-a')
            sky3.classList.add('sky3-a')
            sky4.classList.add('sky4-a')
            brightness.classList.add('brightness-a')

            function listener(e) {
                eye[0].classList.add('blink')
                eye[1].classList.add('blink')
            }

            function goDialogue(e) {
                darkenSky.classList.add('appear-darken-sky')
                brightness.classList.remove('brightness-a', 'fade')
                containerBubble.classList.add('appear-text')
                dots[0].classList.add('dot1-a')
                dots[1].classList.add('dot2-a')
                dots[2].classList.add('dot3-a')

                setTimeout(
                    () => {
                            Array.prototype.forEach.call(dots, (dot) => {
                                dot.classList.remove('dot1-a', 'dot2-a', 'dot3-a')
                                dot.style.opacity = 0 
                            })
                            textDialogue.innerHTML = "¿Ya conociste los proyectos realizados por Pablo?"
                    }, 6000
                )
            }
        }

    })
    return (
        <div className="b-animation">
            <div className="fullscreen sky"></div>
            <div className="fullscreen sky1"></div>
            <div className="fullscreen sky2"></div>
            <div className="fullscreen sky3"></div>
            <div className="fullscreen sky4"></div>
            <div style={{ backgroundImage: `url(${stars})` }} className="stars"></div>
            <img src={moon} className="moon"></img>
            <div className="brightness">
                <div className="sun"></div>
            </div>
            <div className="fullscreen darken-sky"></div>
            <Buho />
        </div>
    )
}

export default Animation