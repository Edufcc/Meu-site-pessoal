import React from "react";

import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";

import "./Portfolio.css";

function Portfolio( { portfolio }) {
   
    return (
        <main>

            {portfolio.map(
                (portfolio, index) =>  
                    <ItemPortfolio
                        key={index}
                        link={portfolio.link}
                        image={portfolio.image}
                        title={portfolio.title}              
                    ></ItemPortfolio>
            )}
       

        </main>
    )

     
    
}
export default Portfolio;