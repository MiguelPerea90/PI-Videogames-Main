
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducer'; // Importamos el reducer
import thunkMiddleware from 'redux-thunk' // Middleware para operaciones asincronas

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
    ); 
    

export default store;
 


