import React from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { filterAlfabetic } from "../../../redux/actions";
import styles from "./FilterByAlfabetic.module.css"


const FilterByAlfabetic = () => {

    const dispatch = useDispatch()

    const myOptions = [
        {
            value: "A-Z",
            label: "A-Z"
        },
        {
            value: "Z-A",
            label: "Z-A"
        }
    ]

    const handlerChange = (event) => {
        dispatch(filterAlfabetic(event.value))
    }



    return (
        <div className={styles.divSelect}>
            <Select options={myOptions} onChange={handlerChange} placeholder="Alfabetic"></Select>
        </div>
    )
    


};

export default FilterByAlfabetic;