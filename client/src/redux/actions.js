import axios from "axios";

import { GET_VIDEOGAMES, GET_VIDEOGAME } from "../actionTypes";

export const getVideogames = () => {
    return async function(dispatch) {
        const apiData = await axios.get(
            "http://localhost:3001/videogames"
        );
            
        // const videogames = apiData.data;
        const videogames = apiData.data;

        console.log(videogames)
        
        return dispatch({ type: GET_VIDEOGAMES, payload: videogames });
    };
};


export const getVideogame = (id) => {
    return async function(dispatch){
        const apiData = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const videogame = apiData.data;
        return dispatch({ type: GET_VIDEOGAME, payload: videogame });
    }
};


// export const platformFilter=(platform)=>{
//     return dispatch({
//         type: PLATFORM_FILTER, payload:platform
//     });
// }

// http://localhost:3001/videogames

// https://jsonplaceholder.typicode.com/users

// https://api.rawg.io/api/games?key=54df824b7baf43cc93b1f374b0f19a21

// https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16

// // const BASE_URL = "http://localhost:3001";
// const VIDEOGAMES_URL = BASE_URL + "/videogames";
// const GENRES_URL = BASE_URL + "/genres";