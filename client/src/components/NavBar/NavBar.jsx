import React from "react";
import { Link } from "react-router-dom";
import styles from './NavBar.module.css'; 

const NavBar = () => {
    return (
        <div className={styles.containerNavBar}>
            
            <div className={styles.containerTitle}>
                <h1 className={styles.title}>Henry Videogames</h1>
            </div>

           <div className={styles.containerReloadStart}>

                <div>
                    <Link to="/">
                        <button 
                            className={styles.start} 
                        >
                            Start
                        </button>
                    </Link>
                </div>

                <div>
                    <Link to="create">
                        <button 
                            className={styles.create} 
                        >
                            Create
                        </button>
                    </Link>
                </div>

           </div>

        </div>
    )
};

export default NavBar;