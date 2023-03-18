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
        <section id="buttomHome">
            <div className={styles.containerH1}>
                <h1 className={styles.titleDetail}>Game Details</h1>
            </div>
        </section>
        <div className={styles.containerDivs}>

            <div className={styles.containerImageTitleRatin}>

               <div className={styles.containerImage}>
                    {videogamesId?.image ? (
                        <img 
                            className={styles.img}
                            src={videogamesId.image}
                            alt="img not found"
                        />
                        ) : (
                        <img
                            className={styles.img}
                            src={imagen}
                            alt="img default not found"
                        />
                    )}
               </div>

                <div className={styles.containerTitleRatin}>
                    <div className={styles.containerTitle}>
                        <h1 
                            className={styles.title}
                        >   
                            {videogamesId?.name.slice(0,20)}
                        </h1> 
                    </div>

                    <div className={styles.containerRatin}>
                        <h3  className={styles.titleRating}>Rating</h3> 
                        <span className={styles.rating}> 
                            {videogamesId?.rating + "⭐"} 
                        </span>
                    </div>
                </div>

            </div>

            <div className={styles.containerDesRelRat}>
                <div className={styles.containerDescription}>
                    <h3 className={styles.titleDescription}>Description</h3> 
                    <p className={styles.parrafoDescription}> 
                            {videogamesId?.description
                            .slice(0,501)
                            .replaceAll("<p>", " ")
                            .replaceAll("</p>", " ")
                            .replaceAll("<br />", " ")}
                    </p>
                </div>

                <div className={styles.containeReleased}>
                    <h3 className={styles.titleReleased}>Released</h3> 
                    <span className={styles.released}> 
                        {videogamesId?.released} 
                    </span>
                </div>    
            </div>

            <div className={styles.containerGenresPlatforms}>
                <div className={styles.containerGenres}>
                    <h3 className={styles.titleGenres}>Genres:</h3>
                    {videogamesId?.Genres.map((ele) => {
                            return (
                                <div key={ele.id} > 
                                    <span className={styles.genres}>
                                        {ele.name}
                                    </span> 
                                </div>
                            );
                    })}
                </div>
                 
                <div className={styles.containerPlatforms}>
                    <h3 className={styles.titlePlatform}>Platforms:</h3>  
                        {videogamesId?.Platforms.map((ele) => {
                            return (
                                <div key={ele.id}> 
                                    <span className={styles.platforms}>{ele.name}</span> 
                                </div>
                            );
                        })}
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
