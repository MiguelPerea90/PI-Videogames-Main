import React from "react";
import Card from "../Card/Card";
import styles from "./CardsContainer.module.css"
import { useSelector } from "react-redux";

const CardsContainer = () => {

    const videogames = useSelector(state => state.videogames);
    
    // Este componente debe tomar un array de videogames y por cada videogame,
    // renderizar un componente Card. Que se muestre en Home.

    return (
        <div className={styles.container}>
            {videogames.map(videogame => {
                return <Card 
                    id={videogame.id}
                    name={videogame.name}
                    released={videogame.released}
                />
            })}
        </div>
    )
};

export default CardsContainer;