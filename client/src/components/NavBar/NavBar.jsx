import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
    return (
        <div className={styles.containerNavBar}>
            <Link to="/home">HOME</Link>
            <Link to="/create">FORM</Link>
            <SearchBar />
        </div>
    )
};

export default NavBar;