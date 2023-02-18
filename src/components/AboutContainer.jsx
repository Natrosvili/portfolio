import React from "react";
import "../Styles/AboutContainer/AboutContainer.css"

export default function AboutContainer() {
    return (
        <section className="s-container">
            <div id="about"></div>
            <h2 className="about">👨‍💻 About Me</h2>
            <hr />
            <div className="gridbox">
                <div className="infoContainer">
                    <p>
                        Hello, My name is Georgios, I enjoy creating things that live on the internet and I'm passionate about 
                        building things for the web. I started my jurney as a developer in 2021 when I decided to build things by myself. - 
                        Turns out it tought me a lot about both myself but also about my potential in this field.
                        Fast-forward to today, I graduated from a Coding Bootcamp called Neue Fische | School and Pool for Digital Talent 
                        in Munich for Web Development and I'm now looking for a junior dev position to finally kick start my career and learn among professionals.
                    </p>
                </div>
                <div className="imageContainer">
                    <img src="/my-photo.png" alt="my face" />
                </div>
                <div className="skillsContainer">
                    <h2>My Skills</h2>
                    <section className="skills">
                        <div>
                            <p>HTML</p>
                        </div>
                        <div>
                            <p>CSS</p>
                        </div>
                        <div>
                            <p 
                            style={{fontSize: "0.7rem"}}
                            >JavaScript</p>
                        </div>
                        <div>
                            <p>React</p>
                        </div>
                        <div>
                            <p>GIT</p>
                        </div>
                        <div>
                            <p>SASS</p>
                        </div>
                        <div>
                            <p
                            style={{fontSize: "0.6rem"}}
                            >MongoDB</p>
                        </div>
                        <div>
                            <p>NextJS</p>
                        </div>
                        <div>
                            <p>Python</p>
                        </div>
                        <div>
                            <p>JQuery</p>
                        </div>
                        <div>
                            <p>Figma</p>
                        </div>
                        <div>
                            <p>NPM</p>
                        </div>
                        <div id="projects">
                            <p>Github</p>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}