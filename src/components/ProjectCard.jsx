import React, {useState} from "react";
import { Icon } from '@iconify/react';
import "../Styles/ProjectCard/ProjectCard.css"

export default function ProjectCard({projectView, projectLink, text, link, textLink, tool1, tool2, tool3, tool4, imgSrc, imgAlt}) {
    const [isTrue, setIsTrue] = useState(true)


    return (
        <section className="project">
            <a href={projectView}>
                <img className="image" src={imgSrc} alt={imgAlt} />
            </a>
            <p className="tech"><span>{tool1}</span> / <span>{tool2}</span> / <span>{tool3}</span> / <span>{tool4}</span></p>
            <p className="project-info">{text} <span> {isTrue && <a className="frontend-mentor-link" href={link}>{textLink}</a>}</span></p>
            <a href={projectLink}>
                <Icon className="icon" icon="mdi:github" width="30"  />
            </a>
        </section> 
    )

}