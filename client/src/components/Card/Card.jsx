import React from "react";
import styles from "./Card.module.css"

const Card = (props) => {

    
    // Este componente debe mostrar... la info de cada videogame mapeado, pero ademas, darnos un link para ir al detalle del videogame en cuestion. 

    return (
        <div className={styles.card}>
           <p>Id:{props.id}</p>
           <p>Name:{props.name}</p>
           <p>email:{props.email}</p>
           <p>phone:{props.phone}</p>
        </div>
    )
};

export default Card;










