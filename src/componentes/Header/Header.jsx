import React from "react";

import "./Header.css";

function Header(props) {

    const { nome, cargo, foto } = props.informacoes;

    return(
        <header>
                <img className="profilePic" src={foto} alt="Foto de Eduardo"/>
                <h1 id="nome-perfil">{nome}</h1>
                <h3 id="eventoSubtitulo">{cargo}</h3>
        </header>

    )
}

export default Header;