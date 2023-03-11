const axios = require('axios');
let URL = "https://rickandmortyapi.com/api/character";
const getApiData = async () => {
    try{
        const characters = [];
        for(let x = 0 ; x < 5; x++){
            const response = await axios(URL);
            const personajes = response.data.results;
            characters.push(...personajes);
            URL = response.data.info.next;
        };

        const format = characters.map(character => {
            return {
                id: character.id,
                name: character.name,
                species: character.species,
                origin: character.origin.name,
                gender: character.gender,
                image: character.image,
                status: character.status
            };
        });
        return format

    } catch (error) {
        return {error: message}
    }

};

module.exports = {getApiData}