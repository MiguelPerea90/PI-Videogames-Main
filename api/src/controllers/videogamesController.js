const axios = require("axios");
const { Videogame } = require("../db");

const { API_KEY } = process.env;

// CONTROLLERS:

// Busca en db.
// Busca en api.
// Unifica
 const searchVideogameByName = () => {

 };

 const getAllVideogames = () => {

 };

// ESTE CONTROLLER BUSCA UN VIDEOGAME POR ID
const getVideogameById = async (id, source) => {
    const videogame = 
    source === "api"
            ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data
            : await Videogame.findByPk(id);

    return videogame;

};


// ESTE CONTROLLER CREA UN NUEVO VIDEOGAME
const createVideogame  = async (id, name, description, released, rating, platforms) => {
    const newVideogame = await Videogame.create({id, name, description, released, rating, platforms});
    return newVideogame;
};


module.exports = {
    searchVideogameByName,
    getAllVideogames,
    getVideogameById,
    createVideogame, 
};