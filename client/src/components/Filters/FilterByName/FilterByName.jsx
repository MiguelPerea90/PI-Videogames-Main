import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { videogamesByName } from "../../../redux/actions";
import styles from "./FilterByName.module.css"


const FilterByName = () => {

    const [name, setNameFilter] = useState()

    const dispatch = useDispatch()

    const handlerChange = (event) => {
        setNameFilter(event.target.value)
    }

    const handlerFindByName = () => {
        dispatch(videogamesByName(name))
        setNameFilter("")
    }

    // const handlerFindAll = () => {
    //     dispatch(getVideogames())
    //     setNameFilter("")
    // }


   
    return (
        <div className={styles.containerFilterByName}>
            <input type="text" 
            className={styles.searchBarInput}  
            onChange={handlerChange} 
            placeholder="Search"/>

            <button 
            className={styles.byNameButton} 
            onClick={handlerFindByName}>Search
            </button>

            {/* <button 
            className={styles.byNameButton} 
            onClick={handlerFindAll}>Reload Videogames
            </button> */}
        </div>
    )
};


export default FilterByName;