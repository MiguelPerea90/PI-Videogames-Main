import React from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { orderByAlfabetic } from "../../../redux/actions";
import styles from "./OrderByAlfabetic.module.css"


const OrederByAlfabetic = () => {

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
        dispatch(orderByAlfabetic(event.value))
    }

    return (
        <div className={styles.containerAlfabetic}>
            <Select 
                options={myOptions} 
                onChange={handlerChange} 
                placeholder="Order Alfabetic">
            </Select>
        </div>
    )
    


};

export default  OrederByAlfabetic;