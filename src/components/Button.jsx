import React from 'react'
import '../assets/styles/components/Button.css'

const Button = ({ click, text }) => {
    return(
        <button 
            type="button" 
            onClick={click} 
            className="b-button">{`${text}`}
        </button>
    )
}

export default Button