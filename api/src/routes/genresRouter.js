const {Router} = require ('express');

const genresRouter = Router();

const { getAllGenresHandler } = require("../handlers/genresHandelers")


// GET /genres:
// Obtener todos los tipos de géneros de videojuegos posibles.
// En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos
//  y luego ya utilizarlos desde allí.
genresRouter.get("/", getAllGenresHandler)


module.exports = genresRouter;