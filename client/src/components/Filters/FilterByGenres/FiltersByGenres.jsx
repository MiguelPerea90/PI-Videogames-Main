import React from "react";
import Select from 'react-select';
import { useSelector, useDispatch } from "react-redux";
import { filterByGenre } from "../../../redux/actions";
import styles from "./FiltersByGenres.module.css"


const FilterByGenres = () => {


    const dispatch = useDispatch();

    const allGenres = useSelector(state => state.genres);

    const infoGenres = allGenres.map(element => {
        return {
            value: element.name,
            label: element.name,
        }
    });


    const myOptions = [
        {
            value: "All",
            label: "All"
        }
    ]

    const infoTotal = [
        ...myOptions,
        ...infoGenres
    ]

    const handlerChange = (event) => {
        dispatch(filterByGenre(event.value))
    }



    return (
        <div className={styles.containerGenre}>
            <Select 
                options={infoTotal} 
                onChange={handlerChange} 
                placeholder="Filter By Genres">
            </Select>
        </div>
    )
  
};

export default FilterByGenres
