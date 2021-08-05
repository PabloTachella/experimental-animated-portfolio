import React from 'react'
import '../assets/styles/components/Buho.css'

const Buho = () => {
    
    return (
        <div className="buho">
            <div className="head-and-body">
                <div className="b-head">
                    <div className="b-head__face">
                        <div className="face_left">
                            <div className="eye__eyelid eye_left">
                                <div className="closed-eye"></div>
                            </div>
                            <div className="eye eye_left">
                                <div className="eye__twinkle_top"></div>
                                <div className="eye__twinkle_bottom"></div>
                            </div>
                        </div>
                        <div className="face_right">
                            <div className="eye__eyelid eye_right">
                                <div className="closed-eye"></div>
                            </div>
                            <div className="eye eye_right">
                                <div className="eye__twinkle_top"></div>
                                <div className="eye__twinkle_bottom"></div>
                            </div>
                        </div>
                    </div>
                    <div className="beak absolute-centered"></div>
                </div>
                <div className="wing wing_left"></div>
                <div className="wing wing_right"></div>
                <div className="body absolute-centered">
                    <div className="head-shadow absolute-centered"></div>
                    <div className="belly absolute-centered"></div>
                </div>
            </div>
            <div className="zzz">
                <div className="z1">z</div>
                <div className="z2">z</div>
                <div className="z3">z</div>
            </div>
            <div className="feet feet_left"></div>
            <div className="feet feet_right"></div>
            <div className="branchs">
                <div className="branch main-branch">
                    <div className="branch__end"></div>
                </div>
                <div className="branch secundary-branch">
                    <div className="branch__end"></div>
                </div>
            </div>
        </div>
    )
}

export default Buho