import React from "react";
import { Link } from "react-router-dom";
import styles from './NavBar.module.css'; 
import FilterByName from "../Filters/FilterByName/FilterByName";
import FilterByAlfabetic from "../Filters/OrderByAlfabetict/FilterByAlfabetic";
import FilterByGenres from "../Filters/FilterByGenres/FiltersByGenres";
import OrderByRating from "../Filters/OrderByRating/OrderByRating";
import FilterByCreated from "../Filters/FilterByCreated/FilterByCreated";


const NavBar = () => {

      const homeButton = {
        backgroundColor: "#F5F5DC",
        color: "black",
        fontSize: "28px",
        padding: "10px 20px",
        fontFamily:  "Courier New",
        borderRadius: "8px",
        border: "none",
        fontWeight: "bold",
        cursor: "pointer"
      };

      const createButton = {
        backgroundColor: "#F5F5DC",
        color: "black",
        fontSize: "20px",
        padding: "10px 20px",
        fontFamily:  "Courier New",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold"
      };

    return (
        <div className={styles.containerNavBar}>

            <Link to="/home">
                <button style={homeButton}>HOME</button>
            </Link>
            <FilterByName />
            <FilterByAlfabetic />
            <OrderByRating />
            <FilterByGenres />
            <FilterByCreated />
            <Link to="/create">
                <button style={createButton}>CREATE VIDEO GAME</button>
            </Link>

        </div>
    )
};

export default NavBar;