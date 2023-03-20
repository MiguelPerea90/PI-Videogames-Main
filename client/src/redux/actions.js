import axios from "axios";

import { 
    GET_VIDEOGAMES, 
    GET_GENRES,
    GET_GENRES_FORM,
    GET_PLATFORMS,
    FILTER_BY_GENRE,
    GET_VIDEOGAME_BY_NAME,
    ORDER_BY_ALFABETIC,
    GET_VIDEOGAME_BY_ID,
    ORDER_BY_RATING,
    FILTER_BY_CREATED,
 } from "./actionTypes";

export const getVideogames = () => {
    return async function(dispatch) {
        const apiVideogames = await axios.get(
            "https://pi-videogames-api-production.up.railway.app/videogames"
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
            "https://pi-videogames-api-production.up.railway.app/genres"
        );
        const allGenres = apiGenres.data;

        return dispatch({ 
            type: GET_GENRES, 
            payload: allGenres 
        });
    };
};

export const getGenresForm = () => {
    return async function(dispatch) {
        const apiGenresForm = await axios.get(
            "https://pi-videogames-api-production.up.railway.app/genres"
        );
        const allGenresForm = apiGenresForm.data.map(element => element.name);

        return dispatch({ 
            type: GET_GENRES_FORM, 
            payload: allGenresForm 
        });
    };
};

export const getPlatforms = () => {
    return async function(dispatch) {
        const apiPlatforms = await axios.get(
            "https://pi-videogames-api-production.up.railway.app/platforms"
        );
        const allPlatforms = apiPlatforms.data.map(element => element.name);

        return dispatch({ 
            type: GET_PLATFORMS, 
            payload: allPlatforms
        });
    };
};

export const videogamesByName = (name) => {
    return async function (dispatch) {
     const dataByName = await axios.get(
         `https://pi-videogames-api-production.up.railway.app/videogames?name=${name}`
     )
     const videogamesByName = dataByName.data
     dispatch({
         type: GET_VIDEOGAME_BY_NAME,
         payload: videogamesByName
     })
    }
 };

export const  filterByGenre = (payload) => {
    return {
        type: FILTER_BY_GENRE,
        payload
    }
};

export const filterByCreated = (payload) => {
    return {
        type: FILTER_BY_CREATED,
        payload
    }
};

export const orderByRating = (payload) => {
    return {
        type: ORDER_BY_RATING,
        payload
    }
};

export const orderByAlfabetic = (payload) => {
    return {
        type: ORDER_BY_ALFABETIC,
        payload
    }
};

export const getVideogameById = (props) => {
    return async function(dispatch) {
        const videogameByIdInfo =  await axios.get(
            `https://pi-videogames-api-production.up.railway.app/videogames/${props.id}`
        );
        const videogameById = videogameByIdInfo.data
        dispatch({
            type: GET_VIDEOGAME_BY_ID,
            payload: videogameById
        })
    };
};




