const Router = require('express')
const router = new Router()
const clothesRouter = require('./clothesRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const basketController = require('./basketsRouter')
const basketClothesController = require('./basketClothesRouter')


router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/clothes', clothesRouter)
router.use('/baskets', basketController)
router.use('/basketClothes', basketClothesController)

module.exports = router