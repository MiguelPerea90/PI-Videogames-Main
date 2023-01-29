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
            // description: element.description,
            // released: element.released,
            // rating: element.rating,
            // platforms: element.platforms.map(element => {
            //     return {
            //         name: element.platform.name
            //     }
            // }),
            Genres: element.genres.map(element => {
                return {
                    id: element.id,
                    name: element.name,
                }
            }),
            image: element.background_image,
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
            attributes: ["name", "id"],
            through: {
                attributes: []
            },
        },
    }); 

    // Todo lo de la api cómo viene
    const apiVideogamesRaw = (
        await axios.get(`${API_URL}?key=${API_KEY}&page_size=10`)
    ).data.results;

    // Todo lo de la api mapeado
    const apiVideogames = cleanArray(apiVideogamesRaw);

    // Retorno un copia de toda la info de la db + la api.
    return [...apiVideogames, ...databaseVideogames]; 

 };


 // eSTE CONTROLLER BUSCA POR QUERY NAME
 const searchVideogamesByName = async (name) => {


    let allVideogames = await getAllVideogames();

    let videogamesByName = allVideogames.filter(element => 
    element.name.toLowerCase().includes(name.toString().toLowerCase()));

    return videogamesByName.slice(0, 15);

    // const apiVideogames = (
    //     await axios.get(`${API_URL}?key=${API_KEY}&search=${name}`)
    // ).data.results;

    // const apiResults = apiVideogames.map(game => {
    //     return {
    //         id:game.id,
    //         name:game.name,
    //         imagen:game.background_image,
    //         genre:game.genres.map(gen=>gen.name),
    //         rating:game.rating
    //     }
    // });

    // return apiResults.slice(0, 15);
    
 };


 // // ESTE CONTROLLER OBTIENE LA INFO DE LA API POR ID
const getVideogameApiById = async (id) => {
    const apivideogameById = (await axios.get(`${API_URL}/${id}?key=${API_KEY}`)).data; 

    // console.log(apivideogameById)

        const videogameById = {
            id: apivideogameById.id,
            name: apivideogameById.name,
            description: apivideogameById.description,
            released: apivideogameById.released,
            rating: apivideogameById.rating,
            platforms: apivideogameById.platforms.map(apivideogameById => {
                return {
                    name: apivideogameById.platform.name
                }
            }),
            genres: apivideogameById.genres.map(apivideogameById => {
                return {
                    id: apivideogameById.id,
                    name: apivideogameById.name,
                }
            }),
            image: apivideogameById.background_image,
            created: false,
        }


    return videogameById;
       
};


// ESTE CONTROLLER OBTIENE LA INFO DE LA DB POR ID
const getVideogameDbById = async (id) => {
    return await Videogame.findByPk(id, {
        include: {
            model: Genre,
            attributes: ["name"],
            through: {
                attributes: []
            },
        },
    });
};


// ESTE CONTROLLER CREA UN NUEVO VIDEOGAME
const createVideogame  = async (name, description, released, rating, platforms, genres) => {

    const newVideogame = await Videogame.create({
        name,
        description,
        released, 
        rating, 
        platforms, 
        genres
    });

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
    getVideogameApiById,
    getVideogameDbById,
    createVideogame, 
};