import React from "react";
import styles from "./Card.module.css"
// import Genre from "../Genre/Genre";
import image from "../../img/default-Image-Cards.jpeg"

const Card = (props) => {
    return (
        <div className={styles.card} >

           {props.image ? <img src={props.image} alt="Videogame Image" /> :
           < img src={image} alt="Default Videogame Image"/>}

           <p>Name:{props.name}</p>

           {props.genres?.map(element => {
                return (
                    <div key={element.id}> 
                        {element.name} 
                    </div>
                )
            })}
              
        </div>
    )
};


// {props.genres?.map(element => {
//     return <div key={element.id}>

//         <Genre  genres={element.name}/>
//     </div>
// })}

export default Card;










