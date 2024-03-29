import React from "react";
import styles from "./Paginado.module.css"

const Paginado = ({videogamesPerPage, allVideogames, paginado}) => {
    const pageNumbers = []

    for(let i=0; i<Math.ceil(allVideogames / videogamesPerPage); i++){
        pageNumbers.push(i+1)
    };
    
    return (
        <nav className={styles.container}>
            <div>
                { pageNumbers && 
                    pageNumbers.map(number => (
                        <a href="#inicio" 
                            className={styles.Paginate} 
                            key={number} 
                            onClick={() => paginado(number)}>
                            {number}
                        </a>
                    ))}
            </div>
        </nav>
    )
};

export default Paginado;