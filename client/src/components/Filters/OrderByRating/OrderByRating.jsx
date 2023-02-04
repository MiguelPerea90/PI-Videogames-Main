import React from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { orderByRating } from "../../../redux/actions";


const OrderByRating = () => {

    const dispatch = useDispatch()

    const myOptions = [
        {
            value: "asc",
            label: "Ascendente"
        },
        {
            value: "dsc",
            label: "Descendente"
        }
    ]

    const handlerChange = (event) => {
        dispatch(orderByRating(event.value))
    }



    return (
        <div>
            <Select options={myOptions} onChange={handlerChange} placeholder="By Rating"></Select>
        </div>
    )
    


};

export default OrderByRating;