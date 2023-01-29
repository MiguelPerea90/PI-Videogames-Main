import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions";
import styles from "./Home.module.css"

const Home = () => {

    const dispatch = useDispatch();  // Nos permite hacer dispatch

    useEffect(()=>{
        dispatch(getVideogames());
    }, [dispatch]);

    // Cuando se monta, que haga el dispatch
    //    useEffect()  -   useDispatch()
    return (
        <div className={styles.containerHome}>
            <NavBar />
            <h1>Home Page</h1>
            <CardsContainer />
        </div>
    )
};

export default Home;