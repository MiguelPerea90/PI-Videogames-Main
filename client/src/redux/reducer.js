import { GET_VIDEOGAMES, GET_VIDEOGAME } from "../actionTypes";

const initialState = {
  videogames: [],
};




const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return { 
        ...state,
        videogames: action.payload
      };
      case GET_VIDEOGAME:
        return {
          ...state,
          videogame: action.payload
        }
    default:
      return { 
        ...state
      };
  };
};

export default rootReducer;
