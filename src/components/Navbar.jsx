import React from "react";
import "../Styles/Navbar/Navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <section className="logo">
                <a href="/"><h1>G</h1></a>
            </section>
            <ul>
                <li><a href="/"><h3>HOME</h3></a></li>
                <li><a href="#about"><h3>ABOUT</h3></a></li>
                <li><a href="#projects"><h3>PROJECTS</h3></a></li>
                <li><a href="#contact"><h3>CONTACT</h3></a></li>
            </ul>
        </nav>
    )
}