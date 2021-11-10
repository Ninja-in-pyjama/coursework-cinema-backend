const {Router} = require('express');
const {movie} = require('../controllers');

const router = Router();

router.get('/', movie.getAll);
router.post('/', movie.create);
router.put('/:id', movie.update);
router.get('/:id', movie.get);
router.delete('/:id', movie.delete);

module.exports = router;