import React, { useEffect } from 'react'
import Buho from './Buho'
import Bush from './Bush'
import moon from '../assets/static/moon.png'
import stars from '../assets/static/stars.png'
import Button from './Button'
import Rabbit from './Rabbit'
import '../assets/styles/components/Animation.css'

const Animation = () => {
    let clickedSkip = false
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
        let bushContainer = document.getElementsByClassName('bush-container')[0]
        let bushs = document.getElementsByClassName('bush')

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

            if (!clickedSkip) {
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
            }

            function goDialogue(e) {
                darkenSky.classList.add('appear-darken-sky')

                if (!clickedSkip) {
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
                            textDialogue.textContent = "¿Ya conociste los proyectos realizados por Pablo?"
                            bushContainer.classList.add('appear-bush')

                            Array.prototype.forEach.call(bushs, (bush) => {
                                bush.classList.add('scale-bush')
                            })
                        }, 6000
                    )
                }
            }

            function listener(e) {
                eye[0].classList.add('blink')
                eye[1].classList.add('blink')
            }

        }


        /* ------------------ Projects ------------------ */

        bushContainer.addEventListener('click', scrollProjects)
        const rabbits = document.querySelectorAll('.rabbit-container')

        function scrollProjects() {

            /* Mantengo posicionados los conejos por más que deje de hacerle hover al arbusto
            que es lo que los hace asomarse en un principio */
            rabbits[0].classList.add('rabbit1-position')
            rabbits[1].classList.add('rabbit2-position')
            rabbits[2].classList.add('rabbit3-position')

            let screenHeight = screen.height
            const screenshots = document.querySelectorAll('.screenshot')

            screenshots.forEach(screenshot => screenshot.classList.add('screenshot-a'))

            setTimeout(() => {
                window.scroll({
                    top: screenHeight,
                    left: 0,
                    behavior: 'smooth'
                })
                bushContainer.style.display = 'none'
            }, 1300)

        }
    })

    /* -------- Omitir animación -------- */
    function skip() {
        clickedSkip = true
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
        let bushContainer = document.getElementsByClassName('bush-container')[0]
        let bushs = document.querySelectorAll('.bush')

        sky1.remove()
        sky2.remove()
        sky3.remove()
        sky4.remove()
        moon.remove()
        stars.remove()

        /* Si presiono el botón de saltar y aún no terminó de posicionarse el buho */
        if (buho.classList.contains('translate-to-right')) {
            buho.classList.replace('translate-to-right', 'get-up-skip')
            feet[0].classList.replace('translate-to-right', 'translate-to-right-skip')
            feet[1].classList.replace('translate-to-right', 'translate-to-right-skip')
            branchs.classList.replace('translate-to-right', 'translate-to-right-skip')

            closedEye[0].classList.add('closed-eye-a-skip')
            closedEye[1].classList.add('closed-eye-a-skip')
            eye[0].classList.add('awakening-eye-skip')
            eye[1].classList.add('awakening-eye-skip')
            z1.classList.add('zzz-a-skip')
            z2.classList.add('zzz-a-skip')
            z3.classList.add('zzz-a-skip')
            brightness.classList.add('brightness-a-skip')
        } else {
            buho.classList.replace('get-up', 'get-up-skip')
            closedEye[0].classList.replace('closed-eye-a', 'closed-eye-a-skip')
            closedEye[1].classList.replace('closed-eye-a', 'closed-eye-a-skip')
            eye[0].classList.replace('awakening-eye', 'awakening-eye-skip')
            eye[1].classList.replace('awakening-eye', 'awakening-eye-skip')
            z1.classList.replace('zzz-a', 'zzz-a-skip')
            z2.classList.replace('zzz-a', 'zzz-a-skip')
            z3.classList.replace('zzz-a', 'zzz-a-skip')
            body.classList.replace('get-up-belly', 'get-up-belly-skip')
            belly.classList.replace('get-up-belly', 'get-up-belly-skip')
            brightness.classList.replace('brightness-a', 'brightness-a-skip')
        }

        containerBubble.classList.add('appear-text-skip')
        textDialogue.textContent = "¿Ya conociste los proyectos realizados por Pablo?"
        bushContainer.classList.add('appear-bush')

        bushs.forEach(bush => {
            bush.classList.add('scale-bush')
        })
    }

    return (
        <>
            <section className="b-animation">
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

                <div className="button-backgound">
                    <Button click={() => skip()} text="Saltar" />
                </div>

                <Buho />

                <div className="bush-container">
                    <div className="rabbit-container rabbit1">
                        <Rabbit />
                        <div className="screenshot"></div>
                    </div>
                    <div className="rabbit-container rabbit2">
                        <Rabbit />
                        <div className="screenshot"></div>
                    </div>
                    <div className="rabbit-container rabbit3">
                        <Rabbit />
                        <div className="screenshot"></div>
                    </div>
                    <Bush />
                </div>
            </section>
            <section className="container-projects">

            </section>
        </>
    )
}

export default Animation