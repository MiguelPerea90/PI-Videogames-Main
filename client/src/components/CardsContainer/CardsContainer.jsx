import { useSelector } from "react-redux";
import { useState } from "react";
import React from "react";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import styles from "./CardsContainer.module.css"

const CardsContainer = () => {


    // Hace una función similar a la de mapStateToProps, en la constatnte  
    // allVideogames me traigo todo lo que está en el estado videogames.
    const allVideogames = useSelector(state => state.videogames);


    // PAGINADO
    const [currentPage, setCurrentPage] = useState(1);

    const [videogamesPerPage] = useState(15);  // setVideogamesPerPage INCLUIR

    const indexOfLastVideogame = currentPage * videogamesPerPage; // 15

    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage; //0

    const currentVideogames = allVideogames.slice(indexOfFirstVideogame, indexOfLastVideogame);


    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


// console.log("currentVideogames", currentVideogames)
    return (
            <div className={styles.cardsContainer}>

                {currentVideogames?.map(videogame => {
                    return (
                        <div key={videogame.id}>
                            <Card 
                                id={videogame.id}
                                image={videogame.image}
                                rating={videogame.rating}
                                name={videogame.name}
                                genres={videogame.Genres}
                            />
                        </div>
                        
                    )
                })}
                <Paginado 
                    videogamesPerPage={videogamesPerPage}
                    allVideogames={allVideogames.length}
                    paginado={paginado}
                />
            </div>
    )
};

export default CardsContainer;