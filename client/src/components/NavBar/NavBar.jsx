import React from "react";
import { Link } from "react-router-dom";
import styles from './NavBar.module.css'; 
import { filterVideogamesByGenre } from "../../redux/actions";
import { useDispatch } from "react-redux";
import FilterByName from "../Filters/FilterByName";

const NavBar = () => {

      const homeButton = {
        backgroundColor: "#DAA520",
        color: "black",
        fontSize: "28px",
        padding: "10px 20px",
        fontFamily:  "Courier New",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
        textDecoration: "none"
      };

      const optionImput = {
        fontSize: "16px",
        fontWeight: "bold",
        padding: "4px 8px",
        fontFamily:  "Courier New",
        borderRadius: "8px",
      }

      const createButton = {
        backgroundColor: "#DAA520",
        color: "black",
        fontSize: "20px",
        padding: "10px 20px",
        fontFamily:  "Courier New",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold"
      };

    const dispatch = useDispatch();

    const handlerFilterByGenres = (event) => {
        dispatch(filterVideogamesByGenre(event.target.value))
    }

    return (
        <div className={styles.containerNavBar}>

            <Link to="/home">
                <h2 style={homeButton}>HOME</h2>
            </Link>

            <select style={optionImput}>
                <option value="asc">A - Z</option>
                <option value="des">Z - A</option>
            </select>

            <select style={optionImput}  onChange={event => handlerFilterByGenres(event)}>
                <option value="genre" disabled selected >By Genre</option>
                <option value="Action">Action</option>
                <option value="Indie">Indie</option>
                <option value="Adventure">Adventure</option>
                <option value="RPG">RPG</option>
                <option value="Strategy">Strategy</option>
                <option value="Shooter">Shooter</option>
                <option value="Casual">Casual</option>
                <option value="Simulation">Simulation</option>
                <option value="Puzzle">Puzzle</option>
                <option value="Arcade">Arcade</option>
                <option value="Platformer">Platformer</option>
                <option value="Racing">Racing</option>
                <option value="Massively Multiplayer">Massively Multiplayer</option>
                <option value="Sports">Sports</option>
                <option value="Fighting">Fighting</option>
                <option value="Family">Family</option>
                <option value="Board Games">Board Games</option>
                <option value="Educational">Educational</option>
                <option value="Card">Card</option>
            </select>

            <select style={optionImput}>
                <option value="Alphabetic" >Alphabetically</option>
                <option value="option 1">Option 1</option>
                <option value="option 2">Option 2</option>
                <option value="option 3">Option 3</option>
            </select>

            <FilterByName />


            <Link to="/create">
                <button style={createButton}>CREATE VIDEO GAME</button>
            </Link>

        </div>
    )
};

export default NavBar;