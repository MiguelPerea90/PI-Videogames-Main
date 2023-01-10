import React from "react";
import styles from "./Paginado.module.css"

const Paginado = ({videogamesPerPage, allVideogames, paginado}) => {
    const pageNumbers = []

    for(let i=0; i<Math.ceil(allVideogames / videogamesPerPage); i++){
        pageNumbers.push(i+1)
    };
    
    return (
        <nav className={styles.container}>
           
        </nav>
    )
};

export default Paginado;