import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const getAll = async () => {
    const { data } = await $host.get('api/basketClothes/')
    return data;
}

export const getOne = async (id) => {
    const { data } = await $host.get(`api/basketClothes/${id}`)
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token);
}

export const getOneByUserID = async (basketid) => {
    const { data } = await $host.get(`api/basketClothes/${basketid}`)
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token);
}

export const create = async (basketNewItem) => {
    console.log(basketNewItem)
    const { data } = await $authHost.post('api/basketClothes/', basketNewItem)
    return data;
}