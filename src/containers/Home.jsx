import React from 'react'
import { connect } from 'react-redux'
import Presentation from '../components/Presentation'
import Main from '../components/Main'
import '../assets/styles/App.css'

const Home = ({ startAnimation }) => {
    return (
        <>
            {startAnimation === false && <Presentation />}
            {startAnimation === true && <Main />}
        </>
    )

}

const mapStateToProps = state => {
    return {
        startAnimation: state.startAnimation
    }
}

export default connect(mapStateToProps, null)(Home)