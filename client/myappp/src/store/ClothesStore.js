import { makeAutoObservable } from "mobx";

export default class ClothesStore {
    constructor() {
        this._types = []
        this._brands = []
        this._clothes = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        this._cart = []; // добавленное состояние корзины
        this._allClothes = []
        makeAutoObservable(this)
    }

    addToCart(item) {
        this._cart.push(item);
    }

    addToAllClothes(clothe) {
        this._allClothes.push(clothe)
    }

    removeFromCart(itemId) {
        this._cart = this._cart.filter(item => item.id !== itemId);
    }

    
    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }
    setClotheses(clothes) {
        this._clothes = clothes
    }
    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get clothes() {
        return this._clothes
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
    get cart() {
        return this._cart;
    }

    get allClothes() {
        return this._allClothes;
    }

}