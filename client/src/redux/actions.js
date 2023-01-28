import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES"

export const getVideogames = () => {
    return async function(dispatch) {
        const apiData = await axios.get(      
            "https://countryapi.io/api/all"         
        );
        const videogames =  apiData.data;
        dispatch({
            type: GET_VIDEOGAMES,
            payload: videogames 
        });
    };
};

// http://localhost:3001/videogames

// https://jsonplaceholder.typicode.com/users