import React from "react";
import "../Styles/ThirdContainer/ThirdContainer.css"
import ProjectContainer from "./ProjectContainer";

export default function ThirdContainer() {
    return (
        <section className="thiContainer">
            <div id="projects"></div>
            <h2 className="projects">💪 Projects</h2>
            <hr />
            <div className="gridProjects">
                <ProjectContainer 
                    projectView="https://capstone-project-movies-series-app.vercel.app/" 
                    projectLink="https://github.com/Natrosvili/Capstone-Project-movies-series-app"
                    text="A mobile app for finding streaming platforms of your favourite movies and series."
                    tool1="NextJS"
                    tool2="GIT"
                    tool3="Figma"
                    tool4="MongoDB"
                    imgSrc="/search-find-go.png" 
                    imgAlt="Search Find Go! Project" />
                <ProjectContainer 
                    projectView="https://natrosvili.github.io/quoteGenerator/" 
                    projectLink="https://github.com/Natrosvili/quoteGenerator"
                    text="A Website where you can get random quotes from inspiring people."
                    tool1="HTML"
                    tool2="SASS"
                    tool3="JavaScript"
                    tool4="GIT" 
                    imgSrc="/quote-generator.png" 
                    imgAlt="Quote Generator Project" />
                <ProjectContainer 
                    projectView="https://natrosvili.github.io/froggerGame/" 
                    projectLink="https://github.com/Natrosvili/froggerGame" 
                    text="A Website where you play as a frog trying to survive and reach the next side of the road."
                    tool1="HTML"
                    tool2="SASS"
                    tool3="JavaScript"
                    tool4="GIT" 
                    imgSrc="/frogger-game.png" 
                    imgAlt="Frogger Game Project" />
                <div className="coming-soon-container">
                    <h2 className="more-coming-soon">More Coming Soon</h2>
                </div>
                <div id="contact"></div>

            </div>
        </section>
    )
}

