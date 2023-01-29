import React from "react";
import Card from "../Card/Card";
import styles from "./CardsContainer.module.css"
import { useSelector } from "react-redux";

const CardsContainer = () => {

    const videogames = useSelector(state => state.videogames);

    return (
        <div className={styles.container}>
            {videogames?.map(videogame => {
                // console.log("Console.log - videogame.Genres", videogame.Genres)
                return (
                    <div key={videogame.id}>
                        <Card 
                            image={videogame.image}
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