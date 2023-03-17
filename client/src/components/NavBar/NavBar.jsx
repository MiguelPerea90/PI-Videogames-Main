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
            
            <div className={styles.containerTitle}>
                <h1 className={styles.title}>Henry Videogames</h1>
            </div>

           <div className={styles.containerReloadCreate}>
                
                {/* <div>
                    <button 
                        className={styles.reload} 
                        onClick={handlerReload}
                    >
                        Reload 
                    </button>
                </div>  */}
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