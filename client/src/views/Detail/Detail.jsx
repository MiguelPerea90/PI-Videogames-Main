import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getVideogameById } from "../../redux/actions";
import styles from "./Detail.module.css"
import Genres from "../../components/Genres/Genres";
import imagen from "../../img/default-Videogames.jpg"
import { Link } from "react-router-dom";


const Detail = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const videogamesId = useSelector(state => state.videogame)

    useEffect(() => {
        dispatch(getVideogameById(location.state))
    },[dispatch, location])


    const homeButton = {
        backgroundColor: "#FFA500",
        color: "black",
        fontSize: "20px",
        padding: "10px 20px",
        fontFamily:  "Courier New",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold"
      };


    return (
            <div className={styles.container}>  


                {videogamesId?.image ?  <img src={videogamesId.image} alt="img not found" width="250px" height="300px" />:
                    < img src={imagen} alt="img default not found" width="250px" height="300px" /> }

                <ul>
                    <li className={styles.info}><h3>Name:</h3> {videogamesId?.name} </li>
                    <li className={styles.info}><h3>Description:</h3> {videogamesId?.description} </li>
                    <li className={styles.info}><h3>Released:</h3> {videogamesId?.released} </li>
                    <li className={styles.info}><h3>Rating:</h3> {videogamesId?.rating} </li>
                </ul>

                {videogamesId?.Genres.map(ele => {

                    return (
                        <div key={ele.id}>
                            <Genres name={ele.name} />
                        </div>
                    )

                } )}
               <Link to="/home" className={styles.homeButton}>
                    <button type="button">home</button>
                </Link>
            </div>
    )
};

export default Detail;















//{
    //     "id": 2400,
    //     "name": "There Came an Echo",
    //     "description": "***Note: There Came an Echo, though designed primarily for voice commands, is fully playable without them.***<br/><br/>Ender Wiggin. Admiral Ackbar. That dude who commands the G.I. Joes. These totally rad commanders knew that battles are won not by a single footsoldier, but by issuing precise commands that put their units in position to achieve victory.<br/><br/>In There Came an Echo, follow in those commanders' footsteps by giving orders to Corrin Webb (Wil Wheaton) and his squadmates in a unique real-time strategy experience. Using an advanced voice recognition system, direct your units through a variety of mission types against foes armed with futuristic energy weaponry and personal force fields. Make your move with standard commands (\"All units, advance to Bravo 3!\") or utilize custom variants to express your unique personality (\"Everyone, do the worm over to Buttface 3!\"). Keep it classy, folks.<br/><br/>Follow a complex, character-driven sci-fi plot: Corrin, an ordinary cryptographer, is thrown into a deadly game of secret agendas when a group of mercenaries tracks him down in Santa Monica, California. Guided by the mysterious Val (Ashly Burch), Corrin must escape from a foe with seemingly limitless resources and discover what secrets his own unbreakable algorithm, Radial Lock, is safeguarding...information that, if released, will rattle the very foundations of reality itself. Also starring Laura Bailey, Yuri Lowenthal, Cassandra Morris, Rachel Robinson, and Cindy Robinson.<br/><br/>Key Features:<br/><ul> <li>Experience an epic single-player campaign that focuses on plot and character development over the course of the game<br/></li><li>Utilize a robust voice command system, or use standard keyboard/mouse/controller methods<br/></li><li>Customize every command, unit, and location in the game to literally any word or phrase<br/></li><li>20+ track original score by phenoms Ronald Jenkees and Big Giant Circles<br/></li><li>Numerous language models supported, including various English-language accents and foreign languages!</li></ul><br/>(Note: if your Intel® RealSense™ needs updated firmware to function properly, please see instructions in this thread: http://steamcommunity.com/app/319740/discussions/0/530646715632003344/)",
    //     "released": "2015-02-24",
    //     "rating": 2.58,
    //     "platforms": [
    //       {
    //         "name": "PlayStation 4"
    //       },
    //       {
    //         "name": "PC"
    //       }
    //     ],
    //     "genres": [
    //       {
    //         "id": 10,
    //         "name": "Strategy"
    //       },
    //       {
    //         "id": 51,
    //         "name": "Indie"
    //       }
    //     ],
    //     "image": "https://media.rawg.io/media/screenshots/274/2740df566cd0181b4277d25e07ae1dc3.jpg",
    //     "created": false
    //   }