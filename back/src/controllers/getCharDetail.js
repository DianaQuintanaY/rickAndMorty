
const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

const getCharDetail = async (req, res) => {

    const {id}= req.params;
    if(id){
    try{
        
        const {data} = await axios(URL+id);
        const character = {
            id: data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species,
            status: data.status,
            origin: data.origin?.name
        };
        return res.status(200).send(character)
    }catch(err){
        return res.status(500).send(err.message)
    }
    } else {
        return res.status(500).send('Debes proveer un id por parametro')
    }
};
module.exports = {getCharDetail};