import React from "react";
import { Icon } from '@iconify/react';
import "../Styles/ProjectContainer/ProjectContainer.css"

export default function ProjectContainer({projectView, projectLink, text, tool1, tool2, tool3, tool4, imgSrc, imgAlt}) {
    return (
        <div className="project">
            <a href={projectView}>
                <img className="image" src={imgSrc} alt={imgAlt} />
            </a>
            <p className="tech"><span>{tool1}</span> / <span>{tool2}</span> / <span>{tool3}</span> / <span>{tool4}</span></p>
            <p className="project-info">{text}</p>
            <a href={projectLink}>
                <Icon icon="mdi:github" width="30"  />
            </a>
        </div> 
    )

}