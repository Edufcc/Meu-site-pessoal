import React from "react";

import "./Header.css";

import fotoEdu from "../../assets/fotoEdu.jpg";

function Header(props) {

    const { nome, cargo, foto } = props.informacoes;

    return(
        <header>
                <img src={fotoEdu} alt="Foto de Eduardo"/>
                <h1 id="nome-perfil">{nome}</h1>
                <h3 id="eventoSubtitulo">{cargo}</h3>
        </header>

    )
}

export default Header;