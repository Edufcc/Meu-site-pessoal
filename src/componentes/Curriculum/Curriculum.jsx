import React from "react";

import "./Curriculum.css";

import data from "./Curriculum.json";



function Curriculum(props) {
    const { resumo, experiencia, habilidade } = props.curriculo

    if (!resumo || !experiencia || !habilidade) {
        return <p>Carregando...</p>
    }

    return(

        <>
            
            <section>
                <h2>Quem Sou</h2>
                <p>{resumo}</p>
            </section>
    
            <section>
                <h2>Formação</h2>
                <ul>
                    {experiencia.map((item, index) => (
                        <li key={index}>
                            <b>({item.anoInicio} - {item.anoFim} )</b> {item.titulo};
                        </li>
                    ))}
                 </ul>
            </section>
    
            <section>
                <h2>Habilidades</h2>
                <ul>
                {habilidade.map((item, index) => (
                    <li key={index}>
                        <b> {item.titulo};</b>
                    </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default Curriculum;