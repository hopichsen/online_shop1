const { Basket } = require('../models/models')
const ApiError = require('../error/ApiError');

class BasketController {
    async create(req, res) {
        const { newBasket } = req.body
        const bakset = await Basket.create(newBasket)
        return res.json(bakset)

    }

    async getAll(req, res) {
        const baskets = await Basket.findAll()
        return res.json(baskets)
    }
}

module.exports = new BasketController()




