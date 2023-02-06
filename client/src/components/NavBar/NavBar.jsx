import React from "react";
import { Link } from "react-router-dom";
import styles from './NavBar.module.css'; 
import FilterByName from "../Filters/FilterByName/FilterByName";
import FilterByAlfabetic from "../Filters/OrderByAlfabetict/FilterByAlfabetic";
import FilterByGenres from "../Filters/FilterByGenres/FiltersByGenres";
import OrderByRating from "../Filters/OrderByRating/OrderByRating";
import FilterByCreated from "../Filters/FilterByCreated/FilterByCreated";


const NavBar = () => {

      // const createButton = {
      //   backgroundColor: "#FF8C00",
      //   color: "black",
      //   fontSize: "20px",
      //   padding: "10px 20px",
      //   fontFamily:  "Courier New",
      //   borderRadius: "8px",
      //   border: "none",
      //   cursor: "pointer",
      //   fontWeight: "bold"
      // };

    return (
        <div className={styles.containerNavBar}>
            <FilterByName />
            <FilterByAlfabetic />
            <OrderByRating />
            <FilterByGenres />
            <FilterByCreated />
            <Link to="/create" className={styles.createButton}>
                <button >create videogame</button>
            </Link>

        </div>
    )
};

export default NavBar;