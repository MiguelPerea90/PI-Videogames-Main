const {Router} = require ('express');

const { getApiInfo } = require('../controllers/videogames');

const router = Router();

// GET /videogames
// Obtener un listado de los videojuegos.
// Debe devolver solo los datos necesarios para la ruta principal.
router.get("/", async (req, res) => {
    // res.send("Esta ruta me trae un listado de los videojuegos");

    try {
        let getApiInfo = await getApiInfo(); 
        return res.status(200).send(getApiInfo);
    } catch (error) {
        return res.status(400).send(error.message);
    }
});


// // // GET /videogames?name="..."

// // // Obtener un listado de los primeros 15 videojuegos que contengan la palabra ingresada como query parameter.
// // // Si no existe ningún videojuego mostrar un mensaje adecuado.
// router.get("/", (req, res) => {
//     res.send("Esta ruta me trae los primeros 15 videojuegos que contengan la palabra ingresada como query parameter.");
// });


// // POST /videogames
// // Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body.
// // Crea un videojuego en la base de datos, relacionado a sus géneros.
// router.post("/", (req, res) => {
//     res.send("Esta ruta crea un videojuego");
// });


module.exports = router;