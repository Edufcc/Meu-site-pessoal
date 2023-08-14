import React from "react";
import "./Footer.css"

import insta from "../../assets/insta.png";
import gitHub from "../../assets/gitHub.png";
import linkedinLogo from "../../assets/linkedinLogo.png";

function Footer() {
    return(
        <footer>

        <a href="https://www.instagram.com/edufc_/" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="imagem do instagram"/>
            <span>Instagram</span>
        </a>

        <a href="https://github.com/Edufcc" target="_blank" rel="noopener noreferrer">
            <img src={gitHub} alt="imagem github"/>
            <span>Github</span>
        </a>

        <a href="https://www.linkedin.com/in/eduardo-freitas-520261268/?originalSubdomain=br" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="imagem linkedin"/>
            <span>Linkedin</span>
        </a>
        
    </footer>
    )
}

export default Footer;
