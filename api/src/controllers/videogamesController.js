const axios = require("axios");
const { Videogame } = require("../db");
const { Op } = require("sequelize");

const { API_KEY, API_URL} = process.env;


// CONTROLLERS:

 // ESTA FUNCIÓN MAPEA LOS RESULTADOS DE LA API Y ES REQUERIDA EN getAllVideogames
 const cleanArray = (arr) => {
    return arr.map( element => {
        return {
            name: element.name,
            description: element.description,
            released: element.released,
            rating: element.rating,
            platforms: element.platforms,
            created: false,
        };
    });
};


 // ESTE CONTROLLER TRAE TODO DE LA DB Y LA API
 const getAllVideogames = async () => {

    // Aqui trae todos los videogames de la db.
    const databaseVideogames = await Videogame.findAll(); 

    // Todo lo de la api cómo viene
    const apiVideogamesRaw = (
        await axios.get(`${API_URL}?key=${API_KEY}&page_size=100`)
    ).data.results;

    // Todo lo de la api mapeado
    const apiVideogames = cleanArray(apiVideogamesRaw);

    // Retorno todo lo de la db + la api.
    return [...databaseVideogames, ...apiVideogames]; 

 };


 // eSTE CONTROLLER BUSCA POR QUERY NAME
 const searchVideogameByName = async (name) => {

    let allVideogames = await getAllVideogames();

    let videogamesByName = allVideogames.filter(element => element.name.toLowerCase().includes(name.toString().toLowerCase()));

    return videogamesByName.slice(0, 15);

 };


// ESTE CONTROLLER BUSCA UN VIDEOGAME POR ID
const getVideogameById = async (id, source) => {
    const videogame = 
    source === "api"
            ? (await axios.get(`${API_URL}/${id}?key=${API_KEY}`)).data
            : await Videogame.findByPk(id);

    return videogame;

};


// ESTE CONTROLLER CREA UN NUEVO VIDEOGAME
const createVideogame  = async (id, name, description, released, rating, platforms) => {
    const newVideogame = await Videogame.create({id, name, description, released, rating, platforms});
    return newVideogame;
};


module.exports = {
    createVideogame,
    getVideogameById, 
    getAllVideogames,
    searchVideogameByName 
};