import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getVideogames, getGenres} from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import styles from "./Home.module.css"

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideogames());
    },[dispatch]);

    useEffect(() => {
        dispatch(getGenres());
    },[dispatch]);

    return (
        <div className={styles.containerHome}>
           <section id="inicio">
                <CardsContainer />
           </section>
        </div>)
};

export default Home;