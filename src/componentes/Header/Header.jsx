import React from "react";

import "./Header.css";

import fotoEdu from "../../assets/fotoEdu.jpg";

function Header() {
    return(
        <header>
                <img src={fotoEdu} alt="Foto de Eduardo"/>
                <h1>Eduardo Freitas</h1>
        </header>

    )
}

export default Header;