import React from "react";
import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = ({links}) => {
    return (
        <nav>
            <h1>Kanna Cocinna</h1>
            <CartWidget />
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">Menu</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;