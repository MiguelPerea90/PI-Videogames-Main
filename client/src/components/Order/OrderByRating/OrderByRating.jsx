import React from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { orderByRating } from "../../../redux/actions";
import styles from "./OrderByRating.module.css"


const OrderByRating = () => {

    const dispatch = useDispatch()

    const myOptions = [
        {
            value: "asc",
            label: "Lower Rating"
        },
        {
            value: "dsc",
            label: "Higher Rating"
        }
    ]

    const handlerChange = (event) => {
        dispatch(orderByRating(event.value))
    }



    return (
        <div className={styles.containerRating}>
            <Select 
                options={myOptions} 
                onChange={handlerChange} 
                placeholder="Order By Rating">
            </Select>
        </div>
    )
    


};

export default OrderByRating;