import React from "react";
import { filterByCreated } from "../../../redux/actions";
import { useDispatch } from "react-redux";
import Select from "react-select";


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
        <div>
             <Select options={myOptions} onChange={handlerChange} placeholder="By Created"></Select>
        </div>
    )
};

export default FilterByCreated;