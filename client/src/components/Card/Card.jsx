import React from "react";
import styles from "./Card.module.css"
import imagen from "../../img/default-Image-Cards.jpeg"

const Card = (props) => {
    return (
        <div className={styles.card} >

           {props.image ? <img src={props.image} alt="Videogame Image" width="300px" height="350px"/> :
           < img src={imagen} alt="Default Videogame Image" width="300px" height="350px" />}

           <h3>Rating:{props.rating}</h3>

           <h3>Name:{props.name}</h3>

           <h4>{props.genres?.map(element => {
                return (
                    <div key={element.id} > 
                        {element.name} 
                    </div>
                )
            })}</h4>
              
        </div>
    )
};


export default Card;










