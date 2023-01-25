import React from "react";
import { Link } from "react-router-dom";
import styles from './Landing.module.css';


const Landing = () => {
    return (
        <div className={styles.containerLanding}>
            <div>
                <h1>Welcome, Videogame Page</h1>
            </div>
            <div>
                <Link to="/home"> 
                    <button className={styles.buttonStart}>Go Home</button>;
                </Link>
            </div>
        </div>
    )
};

export default Landing;