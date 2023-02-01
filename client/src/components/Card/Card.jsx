import React from "react";
import styles from "./Card.module.css"
import imagen from "../../img/default-Image-Cards.jpeg"

const Card = (props) => {
    return (
        <div className={styles.card} >

            { props.image ? <img src={props.image} alt="img not found" width="250px" height="300px" />:
            < img src={imagen} alt="img default not found" width="250px" height="300px" /> }

            <h3>{props.rating}</h3>
            <h3>{props.name}</h3>

            <h4>{ props.genres?.map(element => {
                return (
                    <div key={element.id} > 
                        {element} 
                    </div>
                )
            })}</h4>
              
        </div>
    )
};


export default Card;










