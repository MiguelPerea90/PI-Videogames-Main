import React from "react";
import Card from "../Card/Card";
import styles from "./CardsContainer.module.css"
import { useSelector } from "react-redux";

const CardsContainer = () => {

    const allVideogames = useSelector(state => state.videogames);

    return (
        <div className={styles.cardsContainer}>
            {allVideogames?.map(videogame => {
                return (
                    <div key={videogame.id}>
                        <Card 
                            image={videogame.image}
                            rating={videogame.rating}
                            name={videogame.name}
                            genres={videogame.Genres}
                        />
                    </div>
                )
            })}
        </div>
    )
};

export default CardsContainer;