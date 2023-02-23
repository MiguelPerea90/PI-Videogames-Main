import React from "react";
import styles from "./Card.module.css"
import imagen from "../../img/default-Videogames.jpg"
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className={styles.card}>
            <Link to={{pathname: "/detail", state:{id: props.id}}} >
                { 
                props.image ? 
                <img src={props.image} 
                alt="img not found" 
                width="250px" 
                height="300px" 
                />:
                <img src={imagen} 
                alt="img default not found" 
                width="250px" 
                height="300px" 
                />
                 }
            </Link>
            {props.name}
            {props.rating}
            {props.genres?.map(element => {
                return (
                    <div key={element.id}> {element.name} </div>
                )
            })} 
            {props.platforms?.map(element => {
                return (
                    <div key={element.id}> {element.name} </div>
                )
            })} 
        </div>
    )
};

export default Card;