const {Router} = require('express');
const {getCharById} = require('../controllers/getCharById');
const {getCharDetail} = require('../controllers/getCharDetail');
let {favs} = require('../utils/fav')

const router = Router();
router.get('/onsearch/:id', getCharById);
router.get('/detail/:id',getCharDetail);

router.get('/fav', (req,res) => {
    res.send(favs)
});
router.post('/fav', (req,res) => {
    favs.push({...req.body});
    res.status(201).json({msg: 'agregado ok' , data: {...req.body}})
});
router.delete('/fav/:id', (req,res) => {
    const newFavs = favs.filter(character => character.id !== Number(req.params.id));
    favs = newFavs;
    res.json({msg: 'ok eliminado'})
});

module.exports = router;
