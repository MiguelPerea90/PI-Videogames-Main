import React from "react";
import styles from "./Form.module.css"
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Select from 'react-select';
import { Link, useHistory } from "react-router-dom";
import { getGenres, getPlatforms } from "../../redux/actions";
import axios from "axios";

const validate = (form) => {
    const errors = {}
    if(!form.name) errors.name = "Enter your name"
    if(!form.description) errors.description = "you need a description"
    if(!form.released) errors.released = "Enter a date"
    if(form.rating > 5 || form.rating < 1) errors.rating =  "Ingresa un ratig valido entre 1 y 5"
    if(!form.genres.length) errors.genres = "select your genres"
    if(!form.platforms) errors.platforms = "choose a platform"
    return errors
};

const Form = () => {

    const dispatch =  useDispatch()
    const history = useHistory()

    const allGenres = useSelector(state => state.genres);
    //const allPlatforms = useSelector(state => state.platforms);

    const [form, setForm] = useState({
        name: "",
        description: "",
        released: "",
        rating: 0,
        //platforms: [],
        platforms: "",
        genres: [],
    });

    const [error, setError] = useState({})

    useEffect(()=>{
        const validations = validate(form)
        setError(validations)
        dispatch(getGenres());
        dispatch(getPlatforms());
    }, [dispatch, form]);

    const infoGenres = allGenres.map(element => {
        return {
            value: element.name,
            label: element.name
        }
    });


    const handlerChangeInput = (event) => {
        const property = event.target.name
        const value = event.target.value
        setForm({...form, [property]: value})
    }

    const handlerChangeGenres = (event) => {
        const value = event.value
        const newGenre = form.genres
        const exist = newGenre?.filter(element => element === value)
        if(exist.length > 0) {
            setForm({...form})
        }else{
            setForm({...form, genres: [...form.genres, value]})
        }
    }

    const handlerChangePlatforms = (event) => {
        const value = event.value
        setForm({...form, platforms: value})
    }

    const handlerSubmit = () => {
        if(Object.values(error).length > 0) {
            alert("Missing Data")
        }else{
            axios.post("http://localhost:3001/videogames", form)
            history.push("/home")
            alert("Videogame Created")
        }
    }

    const optionsPlatforms = [
        { label: "PC", value: "PC"},
        { label: "PlayStation 5", value: "PlayStation 5"},
        { label: "PlayStation4", value: "PlayStation4"},
        { label: "Xbox One", value: "Xbox One"},
        { label: "Xbox Series S/X", value: "Xbox Series S/X"},
        { label: "Nintendo Switch", value: "Nintendo Switch"},
        { label: "iOS", value: "iOS"},
        { label: "Android", value: "Android"},
        { label: "Nintendo 3DS", value: "Nintendo 3DS"},
        { label: "Nintendo DS", value: "Nintendo DS"},
    ]

    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.title}>Create Video Game</h1>
                <div className={styles.containerForm}>

                    <form onSubmit={handlerSubmit}>

                        <div className={styles.labelImputDiv}>
                            <label className={styles.labelEnter} >Name:</label>
                            <input className={styles.inputEnter} onChange={ e => handlerChangeInput(e)} type="text" placeholder="Enter Name" name="name"/> 
                        </div>
                        {(error.name) && <span className={styles.spanText} >{error.name}</span>}

                        <div className={styles.labelImputDiv}>
                            <label className={styles.labelEnter} >Description:</label>
                            <input className={styles.inputEnter} onChange={ e => handlerChangeInput(e)} type="text" placeholder="Description" name="description"/> 
                        </div>
                        {(error.description) && <span className={styles.spanText}>{error.description}</span>}

                        <div className={styles.labelImputDiv}>
                            <label className={styles.labelEnter} >Realeased Date:</label>
                            <input className={styles.inputEnter} onChange={ e => handlerChangeInput(e)} type="date"  name="released"/>
                        </div>
                        {(error.released) && <span className={styles.spanText} >{error.released}</span>}

                        <div className={styles.labelImputDiv}>
                            <label className={styles.labelEnter} >Rating:</label>
                            <input className={styles.inputEnter} onChange={ e => handlerChangeInput(e)} type="text" placeholder="Rating" name="rating"></input>
                        </div>
                        {(error.rating) && <span className={styles.spanText} >{error.rating}</span>}

                        <div className={styles.genresText}>
                            <label className={styles.labelEnter} >Genres</label>
                            <Select className={styles.inputEnter} options={infoGenres} onChange={handlerChangeGenres}></Select>
                        </div>
                        {(error.genres) && <span className={styles.spanText}>{error.genres}</span>}

                        <div className={styles.platformsText}>
                            <label className={styles.labelEnter} >Platforms</label>
                            <Select options={optionsPlatforms} onChange={handlerChangePlatforms}></Select>
                        </div>
                        {(error.platforms) && <span className={styles.spanText} >{error.platforms}</span>}

                        <div className={styles.submitHome}>
                            <button className={styles.submitButton} type="Submit" >SUBMIT</button>

                            <Link to="/home" className={styles.homeButton}>
                                <button type="button">home</button>
                            </Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
};

export default Form;

