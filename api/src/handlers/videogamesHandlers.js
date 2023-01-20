const axios = require("axios");

const { 
    createVideogame,
    getVideogameById, 
    getAllVideogames,
    searchVideogameByName 
} = require("../controllers/videogamesController");


// ------------------------------------------- HANDLERS: ---------------------------------------- // 


// ------------------- ESTE HANDLER TRAE TODOS LOS JUEGOS Y BUSCA POR QUERY ----------------------//
// GET /videogames:
// Obtener un listado de los videojuegos. OK 
// Debe devolver solo los datos necesarios para la ruta principal. OK
// GET /videogames?name="...":
// Obtener un listado de los primeros 15 videojuegos que contengan la palabra ingresada como query parameter. Ok
// Si no existe ningún videojuego mostrar un mensaje adecuado.
const getAllVideogamesHandler = async (req, res) => {
    const {name} = req.query;
    try {
        const results = name ? await searchVideogameByName(name) : await getAllVideogames();
        res.status(200).json(results);
    } catch (error) {
        res.status(400).json({error: error.message});
    }

};


// ------------------ ESTE HANDLER MUESTRA EL DETALLE DE UN VIDEOJUEGO POR ID -------------------- //
//  GET /videogame/{idVideogame}:
// Obtener el detalle de un videojuego en particular.
// Debe traer solo los datos pedidos en la ruta de detalle de videojuego.
// Incluir los géneros asociados. 
const getVideogameIdHandeler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {
        const videogame = await getVideogameById(id, source);
        res.status(200).json(videogame);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};


// ----------------------------- ESTE HANDLER CREA UN NUEVO VIDEOGAME -------------------------- //
// POST /videogames:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de 
// videojuego por body.
// Crea un videojuego en la base de datos, relacionado a sus géneros. 
const createVideogameHandeler = async (req, res) => {
    const {id, name, description, released, rating, platforms} = req.body;
   try {
    const newVideogame = await createVideogame(id, name, description, released, rating, platforms);
    res.status(201).json(newVideogame);
   } catch (error) {
    res.status(400).json({ error: error.message });
   }
};



module.exports = {
    getAllVideogamesHandler,
    getVideogameIdHandeler,
    createVideogameHandeler
};
