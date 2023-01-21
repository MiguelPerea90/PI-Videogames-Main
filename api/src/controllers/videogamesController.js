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
            through: {attributes: []}
        }
    }); 

    // Todo lo de la api cómo viene
    const apiVideogamesRaw = (
        await axios.get(`${API_URL}?key=${API_KEY}&page_size=100`)
    ).data.results;

    // Todo lo de la api mapeado
    const apiVideogames = cleanArray(apiVideogamesRaw);

    // Retorno todo lo de la db + la api.
    return [...databaseVideogames, ...apiVideogames]; 

 };


 // eSTE CONTROLLER BUSCA POR QUERY NAME
 const searchVideogamesByName = async (name) => {

    let allVideogames = await getAllVideogames();

    let videogamesByName = allVideogames.filter(element => 
    element.name.toLowerCase().includes(name.toString().toLowerCase()));

    return videogamesByName.slice(0, 15);

 };


// ESTE CONTROLLER BUSCA UN VIDEOGAME POR ID
const getVideogameById = async (id,source) => {
    
            if(source === "api") {
                const dataApi = (await axios.get(`${API_URL}/${id}?key=${API_KEY}`)).data
                const dataDb = {
                    id: dataApi.id,
                    name: dataApi.name,
                    description: dataApi.description,
                    released: dataApi.released,
                    rating: dataApi.rating,
                    platforms: dataApi.platforms.map(dataApi => {
                        return {
                            name: dataApi.platform.name
                        }
                    }),
                    genres: dataApi.genres.map(dataApi => {
                        return {
                            id: dataApi.id,
                            name: dataApi.name,
                        }
                    }),
                    created: false,
                }
                return dataDb;
            }else {
                const dataDb = await Videogame.findByPk(id, {
                    include: {
                        model: Genre,
                        attributes: ["name"],
                        through: {attributes: []}
                    }

                });
                return dataDb;

            }
    
};


// ESTE CONTROLLER CREA UN NUEVO VIDEOGAME
const createVideogame  = async (name, description, released, rating, platforms, genres) => {
    const newVideogame = await Videogame.create({name, description, released, rating, platforms});
    const genresGames = await Genre.findAll({
        where: {
            name: genres
        }
    });

    newVideogame.addGenre(genresGames);

    return newVideogame;
};


module.exports = {
    createVideogame,
    getVideogameById, 
    getAllVideogames,
    searchVideogamesByName 
};