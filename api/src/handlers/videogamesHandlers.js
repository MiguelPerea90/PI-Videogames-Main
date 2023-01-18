const axios = require('axios');
const db = require("../db");
const {Videogame, Genre} = require('../db');
const {API_KEY, API_URL} = process.env;


// HANDLERS FUNCTIONS: 

// ESTA FUNCIÓN TRAE TODOS LOS JUEGOS Y BUSCA POR QUERY
const getVideogamesHandler = (req, res) => {
    const {name} = req.query;
   if(name) res.send(`Busco todos los videogames que se llamen ${name}`)
   else res.send("Envío todos los videogames")
};


// ESTA FUNCIÓN MUESTRA EL DETALLE DE UN VIDEOJUEGO POR ID
const getVideogamesIdHandeler = (req, res) => {
    const {id} = req.params;
    res.send(`Obtengo el detalle del videojuego con el ID ${id}`);
};


// ESTA FUNCIÓN CREA UN NUEVO VIDEOGAME
const createVideogameHandeler = (req, res) => {
    const {id, name, released, rating} = req.body;
    res.send(`Estoy por crear un nuevo videogame con estos datos:
    id: ${id},
    name: ${name},
    released: ${released},
    rating: ${rating}
    `);
};

module.exports = {
    getVideogamesHandler,
    createVideogameHandeler,
    getVideogamesIdHandeler
};












// const apiUrl =  await axios.get(`${API_URL}?key=${API_KEY}&page_size=10`);
