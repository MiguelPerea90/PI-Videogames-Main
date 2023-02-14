import React from "react";
import styles from "./Platforms.module.css"

const Platforms = ({name}) => {
    return (
        <div  className={styles.container}>
            <h3> Platform: <span className={styles.Span}> {name} </span> </h3> 
        </div>
    )
}

export default Platforms;