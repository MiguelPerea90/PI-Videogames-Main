import React from "react";
import { Link } from "react-router-dom";
import styles from './Landing.module.css';

const Landing = () => {
    return (
        <div className={styles.containerLanding}> 
            <div className={styles.containerTitleButton}>
                <h1 className={styles.title}>Henry Videogames</h1>
                <Link to="/home"> 
                    <button 
                        className={styles.buttonHome}>
                        Go Home
                    </button>
                </Link> 
            </div>
        </div>
    )
};

export default Landing;