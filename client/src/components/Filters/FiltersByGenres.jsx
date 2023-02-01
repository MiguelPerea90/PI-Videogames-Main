import React from "react";
import Select from 'react-select';
import { useSelector, useDispatch } from "react-redux";


const FilterByGenres = () => {
    const allGenres = useSelector(state => state.genres);

    const dispatch = useDispatch();
    const infoGenres = allGenres.map(element => {
        return {
            value: element.name,
            label: element.name
        }
    });

    return (
        <div>
            <label><select options={infoGenres}></select></label>
        </div>
    )
  
};

export default FilterByGenres
