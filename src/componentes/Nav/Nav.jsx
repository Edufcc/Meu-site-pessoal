import React from "react";

import "./Nav.css"

import { Link } from "react-router-dom";

function Nav() {
    return(
        <nav>
            <ul>
            <li><Link to="/">Curriculo</Link></li>
            <li><Link to="/portifolio">Portifólio</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;