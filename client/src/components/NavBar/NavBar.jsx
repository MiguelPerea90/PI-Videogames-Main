import React from "react";
import { Link } from "react-router-dom";
import styles from './NavBar.module.css'; 
import FilterByName from "../Filters/FilterByName/FilterByName";
import OrederByAlfabetic from "../Order/OrderByAlfabetict/OrderByAlfabetic";
import FilterByGenres from "../Filters/FilterByGenres/FiltersByGenres";
import OrderByRating from "../Order/OrderByRating/OrderByRating";
import FilterByCreated from "../Filters/FilterByCreated/FilterByCreated";


const NavBar = () => {

    return (
        <div className={styles.containerNavBar}>
            <FilterByName />
            <div className={styles.containerRatingAlfabetic}>
                <OrderByRating />
                <OrederByAlfabetic />
            </div>
            <div className={styles.containerGenresCreated}>
                <FilterByGenres />
                <FilterByCreated />
            </div>
            <div className={styles.createButton}>
            <Link to="/create">
                <button >create videogame</button>
            </Link>
            </div>

        </div>
    )
};

export default NavBar;