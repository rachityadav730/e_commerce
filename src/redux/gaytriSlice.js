import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: [],
    userInfo: null,
}

export const gaytriSlice =createSlice({
    name: 'gaytri',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
          state.productData = action.payload;
        },
    },
});

export const {addToCart} = gaytriSlice.actions
export default gaytriSlice.reducer
