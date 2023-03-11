import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getVideogames, getGenres} from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import styles from "./Home.module.css"
import OrderByAlfabetic from "../../components/Order/OrderByAlfabetict/OrderByAlfabetic";
import OrderByRating from "../../components/Order/OrderByRating/OrderByRating";
import FilterByName from "../../components/Filters/FilterByName/FilterByName";
import FilterByGenres from "../../components/Filters/FilterByGenres/FiltersByGenres";
import FilterByCreated from "../../components/Filters/FilterByCreated/FilterByCreated";
import NavBar from "../../components/NavBar/NavBar";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideogames());
    },[dispatch]);

    useEffect(() => {
        dispatch(getGenres());
    },[dispatch]);


    const [ , setNameFilter] = useState()

    const handlerReload = () => {
        dispatch(getVideogames())
        setNameFilter("")
    }

    return (
        <div className={styles.containerHome}>

            <section id="inicio">

                <NavBar />

                <div className={styles.containerFiltersAndOrders}>  

                    <div className={styles.containerByNameReloadCreate}>
                        
                        <FilterByName />  

                        <div className={styles.containerReloadCreate}> 
                            <div>
                                <button 
                                className={styles.reload} 
                                onClick={handlerReload}
                                >
                                    Reload 
                                </button>
                            </div> 

                            <div>
                                <Link to="/create">
                                    <button 
                                        className={styles.create} 
                                    >
                                        Create
                                    </button>
                                </Link> 
                            </div>
                        </div>
                
                    </div>

                    <div className={styles.containerRatingAlfabetic}>
                        <div className={styles.rating}>
                            <OrderByRating /> 
                        </div>
                        <div className={styles.Alpha}>
                            <OrderByAlfabetic />
                        </div>
                    </div>
                
                    <div className={styles.containerGenreCreated}>
                        <div className={styles.genres}>
                            <FilterByGenres />
                        </div>
                        <div className={styles.creatediv}>
                            <FilterByCreated />
                        </div>
                    </div>

                </div>

            </section>

            <CardsContainer />

        </div>)
};

export default Home;