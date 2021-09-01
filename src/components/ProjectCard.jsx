import React from 'react'
import Button from './Button'
import '../assets/styles/components/ProjectCard.css'

const ProjectCard = ({ title, screenshot }) => {
    return(
        <div className="b-card">
            <img className="b-card__screenshot" src={screenshot}></img>
            <h3 className="b-card__title">{title}</h3>
            <div className="b-technology-icons"></div>
            <div className="b-card__buttons">
                <div className="b-card__button b-card__button_repository">
                    <Button text="Repositorio" />
                </div>
                <div className="b-card__button b-card__button_deploy">
                    <Button text="Ver" />    
                </div>
            </div>
        </div>
    )
}

export default ProjectCard