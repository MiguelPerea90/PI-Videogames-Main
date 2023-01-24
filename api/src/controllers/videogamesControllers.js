const axios = require("axios");
const { Videogame, Genre } = require("../db");

const { API_KEY, API_URL} = process.env;


// CONTROLLERS:

 // ESTA FUNCIÓN MAPEA LOS RESULTADOS DE LA API Y ES REQUERIDA EN getAllVideogames
 const cleanArray = (arr) => {
    return arr.map( element => {
        return {
            id: element.id,
            name: element.name,
            description: element.description,
            released: element.released,
            rating: element.rating,
            platforms: element.platforms.map(element => {
                return {
                    name: element.platform.name
                }
            }),
            genres: element.genres.map(element => {
                return {
                    id: element.id,
                    name: element.name,
                }
            }),
            created: false,
        };
    });
};


 // ESTE CONTROLLER TRAE TODO DE LA DB Y LA API
 const getAllVideogames = async () => {

    // Aqui trae todos los videogames de la db.
    const databaseVideogames = await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ["name"],
            through: {
                attributes: []
            },
        },
    }); 

    // Todo lo de la api cómo viene
    const apiVideogamesRaw = (
        await axios.get(`${API_URL}?key=${API_KEY}&page_size=100`)
    ).data.results;

    // Todo lo de la api mapeado
    const apiVideogames = cleanArray(apiVideogamesRaw);

    // Retorno un copia de toda la info de la db + la api.
    return [...databaseVideogames, ...apiVideogames]; 

 };


 // eSTE CONTROLLER BUSCA POR QUERY NAME
 const searchVideogamesByName = async (name) => {

    let allVideogames = await getAllVideogames();

    let videogamesByName = allVideogames.filter(element => 
    element.name.toLowerCase().includes(name.toString().toLowerCase()));

    return videogamesByName.slice(0, 15);

 };


// ESTE CONTROLLER CREA UN NUEVO VIDEOGAME
const createVideogame  = async (name, description, released, rating, platforms, genres) => {

    const newVideogame = await Videogame.create({name, description, released, rating, platforms, genres});

    const genresGames = await Genre.findAll({
        where: {
            name: genres
        }
    });

    newVideogame.addGenre(genresGames);

    return newVideogame;
};


module.exports = {
    getAllVideogames,
    searchVideogamesByName,
    // getVideogameApiById,
    // getVideogameDbById,
    createVideogame, 
};

















// // ESTE CONTROLLER OBTIENE LA INFO DE LA API POR ID
// const getVideogameApiById = async (id) => {
//     const infoApi = (await axios.get(`${API_URL}/${id}?key=${API_KEY}`)).data; 

//         const infoApiClean = {
//             id: infoApi.id,
//             name: infoApi.name,
//             description: infoApi.description,
//             released: infoApi.released,
//             rating: infoApi.rating,
//             platforms: infoApi.platforms.map(infoApi => {
//                 return {
//                     name: infoApi.platform.name
//                 }
//             }),
//             genres: infoApi.genres.map(infoApi => {
//                 return {
//                     id: infoApi.id,
//                     name: infoApi.name,
//                 }
//             }),
//             created: false,
//         }


//     return infoApiClean;
       
// };


// // ESTE CONTROLLER OBTIENE LA INFO DE LA DB POR ID
// const getVideogameDbById = async (id) => {
//     return await Videogame.findByPk(id, {
//         include: {
//             model: Genre,
//             attributes: ["name"],
//             through: {
//                 attributes: []
//             },
//         },
//     });
// };