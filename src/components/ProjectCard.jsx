import React from 'react'
import '../assets/styles/components/ProjectCard'

const ProjectCard = () => {
    return(
        <div className="b-card">
            <h3 className="b-card__title">Titulo del proyecto</h3>
            <div className="b-card__screenshot"></div>
            <div className="b-technology-icons"></div>
            <div className="b-card__buttons"></div>
        </div>
    )
}

export default ProjectCard