import { GET_VIDEOGAMES, GET_GENRES, FILTER_BY_GENRE, GET_VIDEOGAME_BY_NAME } from "./actionTypes";

const initialState = {
  videogames: [],
  allVideogames: [],
  genres: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        allVideogames: action.payload,
      };
    case GET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case FILTER_BY_GENRE:
      const videogamesByName = state.allVideogames.filter((element) =>
        element.Genres?.some(
          (e) => e.toLowerCase() === action.payload.toLowerCase()
        )
      );
      return {
        ...state,
        videogames: videogamesByName
      };
      case GET_VIDEOGAME_BY_NAME:
        return {
          ...state,
          videogames: action.payload
        } 
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
