import React from "react";
import Select from 'react-select';
import { useSelector, useDispatch } from "react-redux";
import { filterVideogamesByGenre } from "../../../redux/actions";


const FilterByGenres = () => {


    const dispatch = useDispatch();

    const allGenres = useSelector(state => state.genres);

    const infoGenres = allGenres.map(element => {
        return {
            value: element.name,
            label: element.name
        }
    });

    const handlerChange = (event) => {
        dispatch(filterVideogamesByGenre(event.value))
    }


    return (
        <div>
            <Select options={infoGenres} onChange={handlerChange} placeholder="By Genres"></Select>
        </div>
    )
  
};

export default FilterByGenres
