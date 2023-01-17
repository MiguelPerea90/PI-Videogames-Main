const axios = require('axios');
const db = require("../db");
const {Videogame, Genre} = require('../db');
const {API_KEY, API_URL} = process.env;


// CONTROLLERS FUNCTIONS: 
// TRAIGO TODA LA INFO DE LA API Y ME QUEDO CON LO QUE NESECITO
const getApiInfo = async () => {
    const apiUrl =  await axios.get(`${API_URL}?key=${API_KEY}&page_size=10`);
};