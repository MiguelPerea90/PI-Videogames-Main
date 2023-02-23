import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getVideogames, getGenres} from "../../redux/actions";
import CardsContainer from "../../components/CardsContainer/CardsContainer";


const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getVideogames());
        dispatch(getGenres());
    }, [dispatch]);

    return (<CardsContainer />)
};

export default Home;