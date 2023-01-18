const {Router} = require ('express');

const { getVideogamesHandler,
        getVideogamesIdHandeler,
        createVideogameHandeler 
} = require('../handlers/videogamesHandlers');

const videogamesRouter = Router();

// GET /videogames
// Obtener un listado de los videojuegos.
// Debe devolver solo los datos necesarios para la ruta principal.
videogamesRouter.get("/", getVideogamesHandler);


// GET /videogame/{idVideogame}
// Obtener el detalle de un videojuego en particular.
// Debe traer solo los datos pedidos en la ruta de detalle de videojuego.
// Incluir los géneros asociados.
videogamesRouter.get("/:id", getVideogamesIdHandeler);


// // POST /videogames
// // Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body.
// // Crea un videojuego en la base de datos, relacionado a sus géneros.
videogamesRouter.post("/", createVideogameHandeler);


module.exports = videogamesRouter;