const { Basket, BasketClothes } = require('../models/models')
const ApiError = require('../error/ApiError');

class BasketClothesController {
    async create(req, res) {
        const newBasketClothes = req.body
        
        const basketClothes = await BasketClothes.create(newBasketClothes)
        return res.json(basketClothes)
    }

    async getAll(req, res) {
        const basketsClothes = await BasketClothes.findAll()
        return res.json(basketsClothes)
    }

    async getOne(req, res) {
        const { id } = req.params
        const clothes = await BasketClothes.findOne(
            {
                where: { id },
                include: [{ model: Basket }]
            },
        )
        return res.json(clothes)
    }

}

module.exports = new BasketClothesController()




