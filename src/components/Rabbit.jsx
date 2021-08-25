import React from 'react'
import '../assets/styles/components/Rabbit.css'

const Rabbit = () => {
    return(
        <div className="rabbit">
			<div className="ear__outer_left ear__outer">
				<div className="ear__inner"></div>
			</div>
			<div className="ear__outer_right ear__outer">
				<div className="ear__inner"></div>
			</div>
			<div className="rabbit__head">
				<div className="rabbit__eye">
					<div className="rabbit__eye_twinkle"></div>
				</div>
				<div className="rabbit__eye">
					<div className="rabbit__eye_twinkle"></div>
				</div>
                <div className="rabbit__nose"></div>
                <div className="rabbit__mouth rabbit__mouth_left"></div>
                <div className="rabbit__mouth rabbit__mouth_right"></div>
			</div>
            <div className="rabbit__body"></div>
		</div>
    )
}

export default Rabbit