import React from "react";
import styles from "./Genres.module.css"

const Genres = ({name}) => {
    return (
        <div className={styles.container}>
            <h3>Genre:
                <span className={styles.Span}> { name } </span>
            </h3>
        </div>
    )
}

export default Genres;