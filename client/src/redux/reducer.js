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

const initialState = {
  videogames: [], //estado que se va a ir modif en base al FILTRADO
  allVideogames: [], // Estado que siempre va a tener todos los videogames
  genres: [],
  genresForm: [],
  platforms: []
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
    case GET_GENRES_FORM:
      return {
        ...state,
        genresForm: action.payload,
      };
    case GET_PLATFORMS:
      return {
        ...state,
        platforms: action.payload,
      };
    case FILTER_BY_GENRE:
      const allVideogames = state.allVideogames; 
      const genresFiltered = action.payload === 'All' ? 
      state.allVideogames:
      allVideogames.filter(el => {
          return el.Genres?.find(el => {
              return el.name === action.payload;
          })     
      });

      if (genresFiltered.length === 0) {
            alert(`NO VIDEOGAMES FOUND FOR ${action.payload.toUpperCase()} GENRE`)
             
              return {
                ...state
              }
      }

      return {
          ...state,
          videogames: genresFiltered
      };     
    case GET_VIDEOGAME_BY_NAME:
      return {
        ...state,
        videogames: action.payload,
      };
    case ORDER_BY_ALFABETIC:
      const alphabetFiltered =
        action.payload === "A-Z"
          ? state.allVideogames.slice().sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              return 0;
            })
          : state.allVideogames.slice().sort(function (b, a) {
              if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
              if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
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
          ? state.allVideogames.slice().sort(function (a, b) {
              if (a.rating > b.rating ) return 1;
              if (a.rating < b.rating ) return -1;
              return 0;
            })
          : state.allVideogames.slice().sort(function (b, a) {
              if (a.rating < b.rating) return -1;
              if (a.rating > b.rating) return 1;
              return 0;
            });
      return {
        ...state,
        videogames: orderByRating,
      };
    case FILTER_BY_CREATED:
     const allGames = state.allVideogames;
      const createdFilter = action.payload === "created" 
      ? allGames.filter(element => element.created)
      : allGames.filter(game => !game.created) 

      if (createdFilter.length === 0) {
        alert(`NO VIDEOGAMES FOUND FOR ${action.payload} CATEGORY`)
         
          return {
            ...state
          }
      }
      
      return {
        ...state,
        videogames: action.payload === "All" ? allGames :  createdFilter,
      };
    default:
      return {
        ...state,
      };
  }
}; 

export default rootReducer;