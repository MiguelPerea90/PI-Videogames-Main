import React from "react";
import { Link } from "react-router-dom";
import styles from './Landing.module.css';


const Landing = () => {
    return (
        <div className={styles.containerLanding}>
            <div className={styles.container}>
                <h1>Henry Videogames</h1>
                <Link to="/home"> 
                    <button className={styles.buttonStart}>Go Home</button>;
                </Link>
            </div>
        </div>
    )
};

export default Landing;