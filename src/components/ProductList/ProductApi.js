import axios from "axios";
import {API_ENDPOINT} from "../utility/api";

export const getProducts = (limit)=>{
    return axios.get(`${API_ENDPOINT}/products?limit=${limit}`)
};

export const getSingleProduct = (id)=>{
    return axios.get(`${API_ENDPOINT}/products/${id}`)
}