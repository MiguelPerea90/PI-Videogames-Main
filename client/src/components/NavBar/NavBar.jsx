import React from "react";
import { Link } from "react-router-dom";
import styles from './NavBar.module.css'; 
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { getVideogames } from "../../redux/actions";

const NavBar = () => {

    // const [ , setNameFilter] = useState()

    // const dispatch = useDispatch()

    // const handlerReload = () => {
    //     dispatch(getVideogames())
    //     setNameFilter("")
    // }

    return (
        <div className={styles.containerNavBar}>
            
            <div>
                <h1 className={styles.title}>Henry Videogames</h1>
            </div>

           <div className={styles.containerContactAbout}>
                <div>
                    <Link to="#">
                        <button 
                            className={styles.contac} 
                        >
                            Contact
                        </button>
                    </Link>
                </div>
                
                <div>
                    <Link to="#">
                        <button 
                            className={styles.about} 
                        >
                            About
                        </button>
                    </Link>
                </div>
           </div>
           
        </div>
    )
};

export default NavBar;