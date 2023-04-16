import React from "react";

import "./Curriculum.css";

import data from "./Curriculum.json";



function Curriculum() {
    return(

        <>
            
            <section>
                <h2>Quem Sou</h2>
                <p>{data.quemSou}</p>
            </section>
    
            <section>
                <h2>Formação</h2>
                <ul>
                    {data.formação.map((item, index) => (
                        <li key={index}>
                    <b>({item.dataInicio} - {item.dataFim} )</b> {item.titulo};
                    </li>
                    ))}
                 </ul>
            </section>
    
            <section>
                <h2>Habilidades</h2>
                <ul>
                {data.habilidades.map((item, index) => (
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