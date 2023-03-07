import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getVideogameById } from "../../redux/actions";
import styles from "./Detail.module.css"
import Genres from "../../components/Genres/Genres";
import imagen from "../../img/default-Videogames.jpg"
import { Link } from "react-router-dom";
import Platforms from "../../components/Platforms/Platforms";


const Detail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const videogamesId = useSelector((state) => state.videogame);

  useEffect(() => {
    dispatch(getVideogameById(location.state));
  }, [dispatch, location]);

  return (
    <div className={styles.bigContainer}>

        <div className={styles.containerDivs}>

           <div className={styles.containerDivsBoxShadow}>
                <li className={styles.info}>
                    <span className={styles.Span}>
                        <h1 className={styles.title}>{videogamesId?.name}</h1> 
                    </span>
                </li>
                <div className={styles.imageName}>
                    {videogamesId?.image ? (
                        <img
                        src={videogamesId.image}
                        alt="img not found"
                            />
                    ) : (
                        <img
                        src={imagen}
                        alt="img default not found"
                        />
                    )}
                </div>

                <div className={styles.desRelRat}>
                <li className={styles.info}>
                        <h3>Rating:</h3> 
                        <span className={styles.Span}> 
                            {videogamesId?.rating} 
                        </span>
                    </li>
                    <li className={styles.info}>
                        <h3>Description:</h3> 
                        <span className={styles.Span2}> 
                            {videogamesId?.description
                            // .slice(0,601)
                            .replaceAll("<p>", " ")
                            .replaceAll("</p>", " ")
                            .replaceAll("<br />", " ")}
                        </span>
                    </li>

                    <li className={styles.info}>
                        <h3>Released:</h3> 
                        <span className={styles.Span}> 
                            {videogamesId?.released} 
                        </span>
                    </li>

                    
                </div>

               <div className={styles.containerGenresPlatforms}>
                    <div className={styles.genres}>
                        <h3>Genres:</h3>
                        {videogamesId?.Genres.map((ele) => {
                            return (
                                <div key={ele.id} > 
                                    <span>{ele.name}</span> 
                                </div>
                            );
                        })}
                    </div>
                    
                    <div className={styles.platforms}>
                        <h3>Platforms:</h3>
                        {videogamesId?.Platforms.map((ele) => {
                            return (
                                <div key={ele.id}> 
                                    <span>{ele.name}</span> 
                                </div>
                            );
                        })}
                    </div>
               </div>
           </div>

        </div>
            
        <div className={styles.containerLink}>
            <Link to="/home" className={styles.homeButton}>
                <button type="button">home</button>
            </Link>
        </div>

    </div>
  );
};

export default Detail;
