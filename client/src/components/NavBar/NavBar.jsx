import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css"

const NavBar = () => {
    return (
        <div className={styles.containerNavBar}>
            <Link to="/home">HOME</Link>
            <Link to="/create">FORM</Link>
        </div>
    )
};

export default NavBar;