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
                />:
                <img src={imagen} 
                alt="img default not found"  
                />
                 }
            </Link>
            <div className={styles.naRa}>
                {props.name}<br />
                <div className={styles.rating}>
                    {props.rating}
                </div>
                {props.genres?.map(element => {
                        return (
                            <div key={element.id}> {element.name} </div>
                        )
                })} 
            </div>
            
            {/* {props.platforms?.map(element => {
                return (
                    <div key={element.id}> {element.name} </div>
                )
            })}  */}
        </div>
    )
};

export default Card;