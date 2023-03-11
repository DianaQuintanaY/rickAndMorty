const {Router} = require('express');
const {getCharById} = require('../controllers/getCharById');
const {getCharDetail} = require('../controllers/getCharDetail');
const {Character,Favorite} = require("../DB_connection");
const {getApiData} = require("../controllers/saveApiData")

const router = Router();
router.get('/onsearch/:id', getCharById);
router.get('/detail/:id',getCharDetail);

router.get('/fav', async (req,res) => {
    try{
        const info = await Favorite.findAll();
        return res.json(info)
    }catch(err){
        return res.send(err)
    }
});
router.post('/fav', async (req,res) => {
    try{
        const charFav = await Favorite.create(req.body)
        const getCharFav =  await Favorite.findAll();
        return res.json(getCharFav)
    }catch(err){
        return res.send(err);
    }
});
router.delete('/fav/:id', async (req,res) => {
    try{
        const {id} = req.params;
        const info = await Favorite.destroy({where:{id:id}});
        const getCharFav = await Favorite.findAll();
        return res.json(getCharFav)
    }catch(err){
        return res.send(err)
    }
});

router.get('/all', async(req,res) => {
    try{
     const allCharacters = await getApiData();
     await Character.bulkCreate(allCharacters);
     return res.json(allCharacters)
    }catch(err){
        return res.send(err);
    }
});

router.get("alldb", async (req,res) =>{
    try{
        const info = await Character.findAll();
        return res.json(info)
    }catch(err){
        return res.send(err)
    }
})


module.exports = router;
