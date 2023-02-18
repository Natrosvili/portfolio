import React from "react";
import "../Styles/ProjectsContainer/ProjectsContainer.css"
import ProjectCard from "./ProjectCard";

export default function ProjectsContainer() {
    return (
        <section className="thiContainer">
            <div id="projects"></div>
            <h2 className="projects">💪 Projects</h2>
            <hr />
            <div className="gridProjects">
                <ProjectCard 
                    projectView="https://capstone-project-movies-series-app.vercel.app/" 
                    projectLink="https://github.com/Natrosvili/Capstone-Project-movies-series-app"
                    text="A mobile app for finding streaming platforms of your favourite movies and series."
                    tool1="NextJS"
                    tool2="GIT"
                    tool3="Figma"
                    tool4="MongoDB"
                    imgSrc="/search-find-go.png" 
                    imgAlt="Search Find Go! Project" />
                <ProjectCard 
                    projectView="https://natrosvili.github.io/quoteGenerator/" 
                    projectLink="https://github.com/Natrosvili/quoteGenerator"
                    text="A Website where you can get random quotes from inspiring people."
                    tool1="HTML"
                    tool2="SASS"
                    tool3="JavaScript"
                    tool4="GIT" 
                    imgSrc="/quote-generator.png" 
                    imgAlt="Quote Generator Project" 
                    link=""
                    linkText=""
                    />
                <ProjectCard 
                    projectView="https://natrosvili.github.io/froggerGame/" 
                    projectLink="https://github.com/Natrosvili/froggerGame" 
                    text="A Website where you play as a frog trying to survive and reach the next side of the road."
                    tool1="HTML"
                    tool2="SASS"
                    tool3="JavaScript"
                    tool4="GIT" 
                    imgSrc="/frogger-game.png" 
                    imgAlt="Frogger Game Project"
                    link=""
                    linkText=""
                    />
                <ProjectCard 
                    projectView="https://clipboard-landing-page-by-natrosvili.netlify.app/"
                    projectLink="https://github.com/Natrosvili/clipboard-landing-page"
                    text="A project inspired by "
                    tool1="React"
                    tool2="SASS"
                    tool3="GIT"
                    tool4="NPM"
                    imgSrc="/clipboard-page-img.png"
                    imgAlt="clipboard-page-project"
                    link="https://www.frontendmentor.io/"
                    textLink="Frontent Mentor"
                />
                <ProjectCard 
                    projectView="https://testimonials-grid-section-w-react.netlify.app/"
                    projectLink="https://github.com/Natrosvili/testimonials-grid-section"
                    text="A project inspired by"
                    tool1="React"
                    tool2="SASS"
                    tool3="GIT"
                    tool4="NPM"
                    imgSrc="/testimonials-page.png"
                    imgAlt="testimonials landing page"
                    link="https://www.frontendmentor.io/"
                    textLink="Frontent Mentor"
                />

                <div className="coming-soon-container">
                    <h2 className="more-coming-soon">More Coming Soon</h2>
                </div> 
                <div id="contact"></div>

            </div>
        </section>
    )
}

