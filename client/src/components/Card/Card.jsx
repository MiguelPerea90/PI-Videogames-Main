import React from "react";
import styles from "./Card.module.css"
import imagen from "../../img/default-Videogames.jpg"
import { Link } from "react-router-dom";

const Card = (props) => {
    console.log("props.id", props.id)
    return (
        <div className={styles.card}>

            <Link to={{pathname: "/detail", state:{id: props.id}}} >
                { props.image ? <img src={props.image} alt="img not found" width="250px" height="300px" />:
                < img src={imagen} alt="img default not found" width="250px" height="300px" /> }
            </Link>

            <h3>{props.rating}</h3>
            <h3>{props.name}</h3>

            <h4>{ props.genres?.map(element => {
                return (
                    <div key={element} > 
                        {element} 
                    </div>
                )
            })}</h4>
              
        </div>
    )
};


export default Card;










