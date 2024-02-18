import { makeAutoObservable } from "mobx";

export default class BasketStore {
    constructor() {
        this._basketid = 0;
        this._clothesid = [

        ];

        makeAutoObservable(this)
    }

    setBasketClothes(clotheID) {
        this._clothesid.push(clotheID)
    }

    deleteAllClothes() {
        this._clothesid = []
    }

    getBasketID() {
        return this._basketid;
    }

    setBasketID(id) {
        const { basketID } = id;
        this._basketid = basketID;
    }
    getClotheIDs() {
        return this._clothesid
    }

    get basketID() {
        return this._basketid
    }
    get clothesID() {
        return this._clothesid;
    }

}