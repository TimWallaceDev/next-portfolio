"use client"
import "./resume.scss"
import { useState } from 'react'

export function Resume() {

    const [isHovering, setIsHovering] = useState(false)

    function hover() {
        setIsHovering(true)
    }

    function dehover() {
        setIsHovering(false)
    }

    return (
        <a href={`/Tim Wallace - Resume.pdf`} download>
            <div className="resume" onMouseEnter={hover} onMouseLeave={dehover}>
                <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g id="Interface / Download">
                        <path id="Vector" d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12" stroke={isHovering ? "blue" : "black"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                </svg>
                <span className="resume__text">Resume</span>
            </div>
        </a>
    )
}