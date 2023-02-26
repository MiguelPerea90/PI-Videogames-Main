import React from "react";
import { Link } from "react-router-dom";
import styles from './NavBar.module.css'; 
import FilterByName from "../Filters/FilterByName/FilterByName";
import OrederByAlfabetic from "../Order/OrderByAlfabetict/OrderByAlfabetic";
import FilterByGenres from "../Filters/FilterByGenres/FiltersByGenres";
import OrderByRating from "../Order/OrderByRating/OrderByRating";
import FilterByCreated from "../Filters/FilterByCreated/FilterByCreated";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions";

const NavBar = () => {

    const [ , setNameFilter] = useState()

    const dispatch = useDispatch()

    const handlerFindAll = () => {
        dispatch(getVideogames())
        setNameFilter("")
    }

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

            <div className={styles.containerButtons}>
                <div className={styles.createButton}>
                <Link to="/create">
                    <button >Create Videogame</button>
                </Link>
                </div>
                <button 
                    className={styles.byNameButton} 
                    onClick={handlerFindAll}>Reload Videogames
                </button>
            </div>

        </div>
    )
};

export default NavBar;