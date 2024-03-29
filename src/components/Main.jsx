import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Buho from './Buho'
import Bush from './Bush'
import moon from '../assets/static/moon.png'
import stars from '../assets/static/stars.png'
import Button from './Button'
import Rabbit from './Rabbit'
import Navbar from './Navbar'
import '../assets/styles/components/Main.css'
import ProjectCard from './ProjectCard'

const Main = ({ projects }) => {

    let clickedSkip = false

    /* ------------------------------------------- Skip animation ---------------------------------------- */

    function skip() {
        clickedSkip = true
        const buho = document.getElementsByClassName('head-and-body')[0]
        const body = document.getElementsByClassName('body')[0]
        const feet = document.getElementsByClassName('feet')
        const eye = document.getElementsByClassName('eye')
        const closedEye = document.getElementsByClassName('closed-eye')
        const z1 = document.getElementsByClassName('z1')[0]
        const z2 = document.getElementsByClassName('z2')[0]
        const z3 = document.getElementsByClassName('z3')[0]
        const belly = document.getElementsByClassName('belly')[0]
        const sky1 = document.getElementsByClassName('sky1')[0]
        const sky2 = document.getElementsByClassName('sky2')[0]
        const sky3 = document.getElementsByClassName('sky3')[0]
        const sky4 = document.getElementsByClassName('sky4')[0]
        const stars = document.getElementsByClassName('stars')[0]
        const moon = document.getElementsByClassName('moon')[0]
        const brightness = document.getElementsByClassName('brightness')[0]
        const branchs = document.getElementsByClassName('branchs')[0]
        const darkenSky = document.getElementsByClassName('darken-sky')[0]
        const containerBubble = document.getElementsByClassName('container-bubble')[0]
        const textDialogue = document.getElementsByClassName('bubble__text')[0]
        const dots = document.getElementsByClassName('dot')
        const bushContainer = document.getElementsByClassName('bush-container')[0]
        const bushes = document.querySelectorAll('.bush')

        const skipButton = document.querySelector('#skip')

        const navbar = document.querySelector('.container-navbar')
        const markersNavbar = document.querySelectorAll('.b-navbar__marker')

        skipButton.remove()
        sky1.remove()
        sky2.remove()
        sky3.remove()
        sky4.remove()
        moon.remove()
        stars.remove()

        navbar.style.display = 'block'
        markersNavbar[0].style.opacity = '1'

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
            brightness.style.transform = 'translate(-21em, -53em)'
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
            brightness.classList.remove('brightness-a')
            brightness.style.transform = 'translate(-21em, -53em)'
        }

        brightness.style.opacity = '0.7'
        darkenSky.style.opacity = '0.15'

        containerBubble.classList.add('appear-text-skip')
        textDialogue.textContent = "¿Ya conociste los proyectos realizados por Pablo?"
        bushContainer.classList.add('appear-bush')

        bushes.forEach(bush => {
            bush.classList.add('scale-bush')
        })
    }


    /* ----------------------------------- Initialize projects --------------------------------------- */

    function initializeProjects() {

        const previousButton = document.querySelector('.projects__previous-button')
        const nextButton = document.querySelector('.projects__next-button')
        const cards = document.getElementsByClassName('b-card')
        const firstCard = cards[0]
        const containerScrollable = document.querySelector('.container-projects_scrollable')

        let widthCard = firstCard.clientWidth * 1.1 /* el margin-right es 0.1 del width */
        let countScroll = 0
        let amountCards = cards.length

        previousButton.addEventListener('click', previousCard)
        nextButton.addEventListener('click', nextCard)

        containerScrollable.style.left = '0px' /* Esta linea corrige un primer desplazamiento sin transition */
        function nextCard() {
            if (-amountCards + 2 < countScroll) {
                countScroll--
                containerScrollable.style.left = `${countScroll * widthCard}px`
            } else {
                countScroll = 0
                containerScrollable.style.left = `${countScroll * widthCard}px`
            }
        }
        function previousCard() {
            if (countScroll < 0) {
                countScroll++
                containerScrollable.style.left = `${countScroll * widthCard}px`
            }
        }
    }

    /* Se hace uso del hook useEffect para obtener los nodos una vez que hayan sido agregados al DOM */

    useEffect(() => {

        let initializedProjects = false
        const buho = document.getElementsByClassName('head-and-body')[0]
        const body = document.getElementsByClassName('body')[0]
        const feet = document.getElementsByClassName('feet')
        const eye = document.getElementsByClassName('eye')
        const closedEye = document.getElementsByClassName('closed-eye')
        const z1 = document.getElementsByClassName('z1')[0]
        const z2 = document.getElementsByClassName('z2')[0]
        const z3 = document.getElementsByClassName('z3')[0]
        const belly = document.getElementsByClassName('belly')[0]
        const sky1 = document.getElementsByClassName('sky1')[0]
        const sky2 = document.getElementsByClassName('sky2')[0]
        const sky3 = document.getElementsByClassName('sky3')[0]
        const sky4 = document.getElementsByClassName('sky4')[0]
        const stars = document.getElementsByClassName('stars')[0]
        const moon = document.getElementsByClassName('moon')[0]
        const brightness = document.getElementsByClassName('brightness')[0]
        const branchs = document.getElementsByClassName('branchs')[0]
        const darkenSky = document.getElementsByClassName('darken-sky')[0]
        const containerBubble = document.getElementsByClassName('container-bubble')[0]
        const textDialogue = document.getElementsByClassName('bubble__text')[0]
        const dots = document.getElementsByClassName('dot')
        const bushContainer = document.getElementsByClassName('bush-container')[0]
        const bushes = document.querySelectorAll('.bush')
        const rabbits = document.querySelectorAll('.rabbit-container')

        let screenHeight = darkenSky.clientHeight

        const skipButton = document.querySelector('#skip')

        const navbar = document.querySelector('.container-navbar')
        const markersNavbar = document.querySelectorAll('.b-navbar__marker')
        const navbarItems = document.querySelectorAll('.b-navbar__item')

        buho.addEventListener("animationend", goAnimation, false)
        navbarItems[1].addEventListener('click', scrollProjects)
        navbarItems[2].addEventListener('click', scrollProfile)
        bushContainer.addEventListener('click', scrollProjectsAnimated)

        buho.classList.add('translate-to-right')
        feet[0].classList.add('translate-to-right')
        feet[1].classList.add('translate-to-right')
        stars.classList.add('appear')
        moon.classList.add('appear')
        branchs.classList.add('translate-to-right')


        /* ---------------------------- Start Main Animation ------------------------------ */

        function goAnimation() {

            eye[0].addEventListener("animationend", blinkEyes)
            eye[1].addEventListener("animationend", blinkEyes)
            brightness.addEventListener("animationend", goDialogue)

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
                sky1.style.opacity = '0'
                sky2.style.opacity = '0'
                sky3.style.opacity = '0'
                sky4.style.opacity = '0'
                brightness.classList.add('brightness-a')
            }

            function goDialogue() {

                darkenSky.style.opacity = '0.15'

                if (!clickedSkip) {
                    brightness.classList.remove('brightness-a')
                    brightness.style.opacity = '0.7'
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

                            Array.prototype.forEach.call(bushes, (bush) => {
                                bush.classList.add('scale-bush')
                            })

                            skipButton.remove()
                            navbar.style.display = 'block'
                            markersNavbar[0].style.opacity = '1'
                        }, 6000
                    )
                }
            }

            function blinkEyes() {
                eye[0].classList.add('blink')
                eye[1].classList.add('blink')
            }

        }


        /* ------------------ Scroll to Projects ------------------ */

        function scrollProjects() {

            /* ------------------ Projects ------------------ */

            if (!initializedProjects) {
                initializeProjects()
                initializedProjects = true
            }

            navbarItems[1].removeEventListener('click', scrollProjects)
            markersNavbar[1].style.opacity = '1'

            if (window.scrollY > screenHeight) {
                navbarItems[2].addEventListener('click', scrollProfile)
                markersNavbar[2].style.opacity = '0'
            } else {
                navbarItems[0].addEventListener('click', scrollHome)
                markersNavbar[0].style.opacity = '0'

                bushContainer.style.display = 'none'
            }

            window.scroll({
                top: screenHeight,
                left: 0,
                behavior: 'smooth'
            })
        }


        /* ------------------ Scroll to Projects from de bush event ------------------ */

        function scrollProjectsAnimated() {

            /* Mantengo posicionados los conejos por más que deje de hacerle hover al arbusto
            que es lo que los hace asomarse en un principio */
            rabbits[0].classList.add('rabbit1-position')
            rabbits[1].classList.add('rabbit2-position')
            rabbits[2].classList.add('rabbit3-position')

            const screenshots = document.querySelectorAll('.screenshot')

            screenshots.forEach(screenshot => screenshot.classList.add('screenshot-a'))

            setTimeout(() => {
                scrollProjects()

                rabbits[0].classList.remove('rabbit1-position')
                rabbits[1].classList.remove('rabbit2-position')
                rabbits[2].classList.remove('rabbit3-position')
                screenshots.forEach(screenshot => screenshot.classList.remove('screenshot-a'))

            }, 1300)
        }


        /* ------------------ Scroll to Home ------------------ */

        function scrollHome() {

            navbarItems[0].removeEventListener('click', scrollHome)
            markersNavbar[0].style.opacity = '1'

            /* Si el scroll en Y es mayor a 1.5*screenHeight quiere decir que vengo de la seccion de profile */
            /* Es necesario multiplicar por 1.5 para evitar ingresar a una condición erronea al estar en la 
                sección profile y tocar projects e inmediatamente home sin darle tiempo al window.scroll a 
                llegar a 1x de screenHeight */
            if (window.scrollY > screenHeight * 1.5) {
                navbarItems[2].addEventListener('click', scrollProfile)
                markersNavbar[2].style.opacity = '0'
            } else {
                navbarItems[1].addEventListener('click', scrollProjects)
                markersNavbar[1].style.opacity = '0'
            }

            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })

            bushContainer.style.display = 'block'
            bushContainer.classList.add('appear-bush')
            bushes.forEach(bush => {
                bush.classList.add('scale-bush')
            })
        }


        /* ------------------ Scroll to Profile ------------------ */

        function scrollProfile() {

            navbarItems[2].removeEventListener('click', scrollProfile)
            markersNavbar[2].style.opacity = '1'

            if (window.scrollY === 0) {
                navbarItems[0].addEventListener('click', scrollHome)
                markersNavbar[0].style.opacity = '0'
            } else {
                navbarItems[1].addEventListener('click', scrollProjects)
                markersNavbar[1].style.opacity = '0'
            }

            window.scroll({
                top: screenHeight * 2,
                left: 0,
                behavior: 'smooth'
            })

            bushContainer.style.display = 'none'
        }
    })


    return (
        <div className="page">
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

                <div id="skip" className="button-backgound">
                    <Button id="skip" click={() => skip()} text="Saltar" />
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

            <div className="container-navbar">
                <Navbar />
            </div>

            <section className="b-projects">
                <div className="projects__previous-button projects__button-scroll"></div>

                <div className="container-projects">
                    <div className="container-projects_scrollable">
                        {projects.map(project =>
                            <ProjectCard key={project.id} {...project} />
                        )}
                    </div>
                </div>

                <div className="projects__next-button projects__button-scroll"></div>
            </section>

            <section className="b-profile">
                <div className="b-profile__container">
                    <div className="b-about-me"></div>
                    <div className="b-skills"></div>
                    <div className="b-courses"></div>
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps, null)(Main)