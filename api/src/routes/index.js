/**ESTE MÓDULO (ENRUTADOR) TIENE LA RESPONSABILIDAD DE DEFINIR LAS RUTAS */

const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRoute = require("./videogames");
const genresRoute = require("./genres");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogamesRoute);
router.use("/genres", genresRoute);


module.exports = router;