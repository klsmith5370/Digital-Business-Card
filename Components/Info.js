import React from "react"

export default function Info() {
    return (
        <header>
            <img src="profile pic.png" alt="profile picture"/>
            <h2 className="name">Kourtney Smith</h2>
            {/* <h3 className="title">Fullstack Software Engineer</h3> */}
            <button className="email-button">Email Me</button>
            <button className="LinkedIn-button">LinkedIn</button>
        </header>
    )
}