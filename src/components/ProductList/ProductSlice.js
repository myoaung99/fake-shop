import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProducts, getSingleProduct} from "./ProductApi";

const initialStates = {
    loading: false,
    products: [],
    product: null,
    error: null,

}

export const getProductsAsync = createAsyncThunk(
    'products/get',
    async ({limit})=>{
        const response = await getProducts(limit);
        return response.data
    }
    );
export const getSingleProductAsync = createAsyncThunk(
    'products/getSingle',
    async ({id})=>{
        const response = await getSingleProduct(id);
        return response.data
    }
    );

const productsSlice = createSlice({
    name: 'products',
    initialState: initialStates,
    reducers: {},
    extraReducers: (builder) =>{
        builder
            .addCase(getProductsAsync.pending, (state)=>{
                state.loading = true
                state.error = null
            })
            .addCase(getProductsAsync.fulfilled, (state, action)=>{
                state.products = action.payload
                state.loading = false
            })
            .addCase(getProductsAsync.rejected, (state, action)=>{
                state.loading = false
                state.error = action.payload || 'Something went wrong'
            })
            .addCase(getSingleProductAsync.pending, (state)=>{
                state.loading = true
                state.error = null
            })
            .addCase(getSingleProductAsync.fulfilled, (state,action)=>{
                state.loading = false
                state.product = action.payload
            })
            .addCase(getSingleProductAsync.rejected, (state, action)=>{
                state.loading = false
                state.error = action.payload || 'Something went wrong'
            })
    }
})

export default productsSlice.reducer;