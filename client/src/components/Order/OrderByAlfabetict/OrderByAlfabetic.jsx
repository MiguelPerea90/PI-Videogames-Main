import React from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { orderByAlfabetic } from "../../../redux/actions";
import styles from "./OrderByAlfabetic.module.css"


const OrderByAlfabetic = () => {

    const dispatch = useDispatch()

    const myOptions = [
        {
            value: "A-Z",
            label: "From A to Z"
        },
        {
            value: "Z-A",
            label: "From Z to A"
        }
    ]

    const handlerChange = (event) => {
        dispatch(orderByAlfabetic(event.value))
    }

    return (
        <div className={styles.containerAlfabetic}>
            <Select className={styles.select}
                options={myOptions} 
                onChange={handlerChange} 
                placeholder="Order alphabetically">
            </Select>
        </div>
    )
    


};

export default  OrderByAlfabetic;