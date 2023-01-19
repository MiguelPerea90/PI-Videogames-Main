const axios = require("axios");

const { 
    createVideogame,
    getVideogameById, 
    // getAllVideogames,
    // searchVideogameByName 
} = require("../controllers/videogamesController");

// HANDLERS:

// LA IDEA ES QUE LOS HANDLERS DE LAS RUTAS NO INTERACTUEN CON LO MODELOS

// ESTE HANDLER TRAE TODOS LOS JUEGOS Y BUSCA POR QUERY
const getVideogamesHandler = (req, res) => {
    const {name} = req.query;
   
    const results  = name ? searchVideogameByName(name) : getAllVideogames();
};


// ESTE HANDLER MUESTRA EL DETALLE DE UN VIDEOJUEGO POR ID
// Obtener el detalle de un videojuego en particular.
// Debe traer solo los datos pedidos en la ruta de detalle de videojuego.
// Incluir los géneros asociados.

// En este caso tengo que poder darme cuenta de que tipo de ID estoy hablando.
// Puede que llegue acá un ID de algo que no existe
const getVideogamesIdHandeler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {
        const videogame = await getVideogameById(id, source);
        res.status(200).json(videogame);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};


// ESTE HANDLER CREA UN NUEVO VIDEOGAME
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
    getVideogamesHandler,
    getVideogamesIdHandeler,
    createVideogameHandeler
};












// const apiUrl =  await axios.get(`${API_URL}?key=${API_KEY}&page_size=10`);
