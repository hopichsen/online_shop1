const Router = require('express')
const router = new Router()
const basketClothesController = require('../controllers/basketClothesController')

router.post('/', basketClothesController.create)
router.get('/', basketClothesController.getAll)
router.get('/:id', basketClothesController.getOne)



module.exports = router