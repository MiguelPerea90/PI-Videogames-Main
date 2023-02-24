import React from "react";
import { filterByCreated } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import Select from "react-select";
import styles from "./FilterByCreated.module.css"


const FilterByCreated = () => {

    const dispatch = useDispatch()

    const myOptions = [
        {
            value: "api",
            label: "Not Created"
        },
        {
            value: "db",
            label: "Created"
        }
    ]

    const handlerChange = (event) => {
        dispatch(filterByCreated(event.value))
    }

    return (
        <div className={styles.containerCreated}>
             <Select 
                options={myOptions} 
                onChange={handlerChange} 
                placeholder="Filter By Created">
             </Select>
        </div>
    )
};

export default FilterByCreated;