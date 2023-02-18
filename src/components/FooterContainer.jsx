import React, {useEffect, useState}  from "react";
import { Icon } from '@iconify/react';
import "../Styles/Footer/Footer.css"

export default function Footer() {

    const [year, setYear] = useState(null)

    useEffect(() => {
        setYear(new Date().getFullYear())
    }, [])

    return (
        <footer>
            <h2 className="heading">GEORGIOS NATROSVILI</h2>
            <p className="info">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
            <div className="icons">
                <a href="https://github.com/Natrosvili" ><Icon icon="mdi:github" width="40"  /></a>
                <a href="https://www.linkedin.com/in/natrosvili/" ><Icon icon="mdi:linkedin" width="40"  /></a>
                <a href="mailto:georgenatro@gmail.com" ><Icon icon="material-symbols:alternate-email" width="40"  /></a>
            </div>
            <p>@Copyright {year}. Made by Georgios Natrosvili</p>
        </footer>
    )
}