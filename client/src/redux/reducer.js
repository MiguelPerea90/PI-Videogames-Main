import {
  GET_VIDEOGAMES,
  GET_GENRES,
  GET_GENRES_FORM,
  GET_PLATFORMS,
  // FILTER_BY_GENRE,

  FILTER_GENRE,


  GET_VIDEOGAME_BY_NAME,
  ORDER_BY_ALFABETIC,
  GET_VIDEOGAME_BY_ID,
  ORDER_BY_RATING,
  FILTER_BY_CREATED
} from "./actionTypes";

const initialState = {
  backup: [], //estado backup con todos los juegos
  videogames: [], //estado que se va a ir modif en base al FILTRADO
  allVideogames: [], //estado que SIEMPRE va a tener todos los juegos
  genres: [],
  genresForm: [],
  platforms: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        backup: action.payload,
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
    // case FILTER_BY_GENRE:
    //   const filterByGenre = state.allVideogames.filter((element) =>
    //   element.Genres?.some(
    //     (e) => e === action.payload.toLowerCase()
    //   )
    //   );
    //   return {
    //     ...state,
    //     videogames: filterByGenre,
    //   };


      case FILTER_GENRE:
        const allVideogames = state.backup;
        const filtered = [];
  
        allVideogames.forEach((game) => {
          game.genres.forEach((genre) => {
            if (genre.name === action.payload) filtered.push(game);
          });
        });
  
        return {
          ...state,
          videogames: filtered,
        };
    case GET_VIDEOGAME_BY_NAME:
      return {
        ...state,
        videogames: action.payload,
      };
    case ORDER_BY_ALFABETIC:
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

// created
// const filterCreated = action.payload === "api" ?  
//       state.allVideogames.filter(e => e.created === false) : 
//       state.allVideogames.filter(e => e.created === true) 

export default rootReducer;


