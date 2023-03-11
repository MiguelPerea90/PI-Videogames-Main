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
            label: "Existent"
        },
        {
            value: "createdInDb",
            label: "Created"
        },
        {
            value: "All",
            label: "All"
        },
    ]

    const handlerChange = (event) => {
        dispatch(filterByCreated(event.value))
    }

    return (
        <div className={styles.containerCreated}>
             <Select className={styles.select}
                options={myOptions} 
                onChange={handlerChange} 
                placeholder="Created or Existing">
             </Select>
        </div>
    )
};

export default FilterByCreated;