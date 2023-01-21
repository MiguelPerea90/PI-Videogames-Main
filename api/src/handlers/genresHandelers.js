const axios = require("axios");

const { getAllGenres } = require("../controllers/genresControllers")






// GET /genres:
// Obtener todos los tipos de géneros de videojuegos posibles.
// En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos
//  y luego ya utilizarlos desde allí.
const  getAllGenresHandler = async (req, res) => {

    try {
        const genres = await getAllGenres();

        res.status(200).json(genres);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


module.exports = { getAllGenresHandler };