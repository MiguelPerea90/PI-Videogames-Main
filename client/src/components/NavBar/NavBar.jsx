import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
    return (
        <div className={styles.containerNavBar}>
            <Link to="/home">
                <h2 >Home</h2>
            </Link>
            <Link to="/create">
                <button>Create Video Game</button>
            </Link>
            <SearchBar />
        </div>
    )
};

export default NavBar;