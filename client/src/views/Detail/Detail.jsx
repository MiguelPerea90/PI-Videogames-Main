import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getVideogameById } from "../../redux/actions";
import styles from "./Detail.module.css"
// import Genres from "../../components/Genres/Genres";
import imagen from "../../img/default-Videogames.jpg"
import { Link } from "react-router-dom";
// import Platforms from "../../components/Platforms/Platforms";


const Detail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const videogamesId = useSelector((state) => state.videogame);

  useEffect(() => {
    dispatch(getVideogameById(location.state));
  }, [dispatch, location]);

  return (
    <div className={styles.container}>

       
            
        <div className={styles.containerLink}>
            <Link to="/home" className={styles.homeButton}>
                <button type="button">home</button>
            </Link>
        </div>

    </div>
  );
};

export default Detail;
