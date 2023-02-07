const {Router} = require ('express');

const platformsRouter = Router();

const { getAllPlatformsHandler } = require("../handlers/platformsHandelers")


// GET /genres:
// Obtener todos los tipos de géneros de videojuegos posibles.
// En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos
//  y luego ya utilizarlos desde allí.
platformsRouter.get("/", getAllPlatformsHandler)


module.exports = platformsRouter;