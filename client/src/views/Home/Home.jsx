import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getVideogames, getGenres } from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import styles from "./Home.module.css"


const Home = () => {

    
    // Nos permite hacer dispatch de las actions creators,
    // usando la constatnte dispatch. 
    const dispatch = useDispatch();

    

    // useEffect() lo utilizo en este caso para ejecutar una función 
    // solo cuando se monta el componente. 
    useEffect(()=>{
        dispatch(getVideogames());
        dispatch(getGenres());
    }, [dispatch]);

    return (
        <div className={styles.containerHome}>
            <CardsContainer />
        </div>
    )
};

export default Home;