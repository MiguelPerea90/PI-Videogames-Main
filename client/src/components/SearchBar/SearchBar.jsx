import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
    return (
        <div>
            <input className={styles.inputSearch} type="text" placeholder='Videogame...' />
            <button className={styles.buttonSearch}>Buscar</button>
        </div>
    )
};

export default SearchBar;