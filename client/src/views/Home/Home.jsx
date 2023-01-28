import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions";

const Home = () => {

    const dispatch = useDispatch();  // Nos permite hacer dispatch

    useEffect(()=>{
        dispatch(getVideogames());
    }, [dispatch]);

    // Cuando se monta, que haga el dispatch
    //    useEffect()  -   useDispatch()
    return (
        <>
            <NavBar />
            <h1>Home Page</h1>
            <CardsContainer />
        </>
    )
};

export default Home;