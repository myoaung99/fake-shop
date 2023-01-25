import {configureStore} from "@reduxjs/toolkit";
import productReducer from './../ProductList/ProductSlice'

const store = configureStore({
    reducer: {
        products: productReducer
    }
});

export default store;