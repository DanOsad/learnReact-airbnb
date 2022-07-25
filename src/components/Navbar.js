import React from "react"
import logo from "../images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav className="navbar-container">
            <img src={logo} alt="airbnb-logo" className="logo" />
        </nav>
    )
}