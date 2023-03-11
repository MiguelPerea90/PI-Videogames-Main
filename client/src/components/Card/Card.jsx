import React from "react";
import styles from "./Card.module.css"
import imagen from "../../img/default-Videogames.jpg"
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className={styles.card} key={props.id}>

            <Link to={{pathname: "/detail", state:{id: props.id}}} >
                { 
                    props.image ? 
                    <img src={props.image} 
                        alt="img not found" 
                        />:
                        <img src={imagen} 
                        alt="img default not found"  
                    />
                 }
            </Link>

            <div className={styles.containerDetail}>
                    <div className={styles.naRa}>
                        <div>
                            {props.name.slice(0, 30)}
                        </div>
                        <div className={styles.rating}>
                            {props.rating}
                        </div>
                    </div>

                    <div className={styles.containerGenre}>
                        {props.Genres?.map(element => {
                            return (
                                <div key={element.id}>
                                     <span> {element.name}</span> 
                                </div>
                            )
                        })} 
                    </div>

                    <div className={styles.containerButtomSeeMore}>
                        <Link to={{pathname: "/detail", state:{id: props.id}}} >
                            <button className={styles.buttomSeeMore}>See More</button>
                        </Link>
                    </div>
            </div>

        </div>
    )
};

export default Card;