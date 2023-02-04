import {
  GET_VIDEOGAMES,
  GET_GENRES,
  FILTER_BY_GENRE,
  GET_VIDEOGAME_BY_NAME,
  FILTER_BY_ALFABETIC,
  GET_VIDEOGAME_BY_ID,
  ORDER_BY_RATING,
  FILTER_BY_CREATED
} from "./actionTypes";

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
        videogames: videogamesByName,
      };
    case GET_VIDEOGAME_BY_NAME:
      return {
        ...state,
        videogames: action.payload,
      };
    case FILTER_BY_ALFABETIC:
      const alphabetFiltered =
        action.payload === "A-Z"
          ? state.videogames.slice().sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              return 0;
            })
          : state.videogames.slice().sort(function (a, b) {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
              return 0;
            });

      return {
        ...state,
        videogames: alphabetFiltered,
      };
    case GET_VIDEOGAME_BY_ID:
      return {
        ...state,
        videogame: action.payload,
      };
    case ORDER_BY_RATING:
      const orderByRating =
        action.payload === "asc"
          ? state.videogames.slice().sort(function (a, b) {
              if (a.rating > b.rating ) return 1;
              if (a.rating < b.rating ) return -1;
              return 0;
            })
          : state.videogames.slice().sort(function (a, b) {
              if (a.rating < b.rating) return 1;
              if (a.rating > b.rating) return -1;
              return 0;
            });
      return {
        ...state,
        videogames: orderByRating,
      };
      case FILTER_BY_CREATED:
        const filterCreated = action.payload === "api" ?  
        state.allVideogames.filter(e => e.created === false) : 
        state.allVideogames.filter(e => e.created === true)
        return {
            ...state,
            videogames: filterCreated
        }
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
