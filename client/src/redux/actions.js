import axios from "axios";

import { GET_VIDEOGAMES, GET_GENRES, FILTER_BY_GENRE, GET_VIDEOGAME_BY_NAME } from "./actionTypes";

export const getVideogames = () => {
    return async function(dispatch) {
        const apiVideogames = await axios.get(
            "http://localhost:3001/videogames"
        );
        const allVideogames = apiVideogames.data;

        return dispatch({ 
            type: GET_VIDEOGAMES, 
            payload: allVideogames 
        });
    };
};

export const getGenres = () => {
    return async function(dispatch) {
        const apiGenres = await axios.get(
            "http://localhost:3001/genres"
        );
        const allGenres = apiGenres.data;

        return dispatch({ 
            type: GET_GENRES, 
            payload: allGenres 
        });
    };
};


export const filterVideogamesByGenre = (payload) => {
    return {
        type: FILTER_BY_GENRE,
        payload
    }
};

export const videogamesByName = (name) => {
   return async function (dispatch) {
    const dataByName = await axios.get(
        `http://localhost:3001/videogames?name=${name}`
    )
    const videogamesByName = dataByName.data
    dispatch({
        type: GET_VIDEOGAME_BY_NAME,
        payload: videogamesByName
    })
   }
};
