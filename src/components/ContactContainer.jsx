import React from "react";
import "../Styles/ContactContainer/ContactContainer.css"

export default function ContactContainer() {
    return (
        <section id="contact" className="foContainer">
            <h2 className="contact">🤙 Contact</h2>
            <hr />
            <p className="question">Have a Question or want to work together?</p>
            <div>
                <h2 className="inTouch">Get In Touch</h2>
                <p className="opp">
                    I'm seeking out opportunities to collaborate
                    with companies / agencies / individuals, not
                    just work for them. I want to bring my  
                    Programming Knowledge / experience to the
                    table where we can work together to solve real business-problems 
                    in a way that optimizes all of our respective experience
                    and knowledge.</p>
                    <a className="contactMe" href="mailto:georgenatro@gmail.com">Contact Me</a>
            </div>
        </section>
    )
}