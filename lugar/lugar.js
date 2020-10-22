const axios = require('axios');


const getLugarLatLng = async ( dir ) => {
    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseUrl: `https://devru-latitude-longitude-find-1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        headers: {'X-RapidAPI-Key': 'a69538fb07msh0658a5ae8498229p10c6a3jsn18ff6673527f'}
    });

    const resp = await instance.get();

    if (data.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`)
        
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}

