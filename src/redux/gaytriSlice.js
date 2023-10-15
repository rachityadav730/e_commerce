import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     productData: [],
//     userInfo: null,
// }

export const gaytriSlice =createSlice({
    name: 'gaytri',
    initialState: {
      productData: [],
      userInfo: null,
  },
    reducers:{
        addToCart:(state,action) =>{
            const item = state.productData.find((item) => item._id === action.payload)
          if (item){
            item.quantity += action.payload.quantity
          }
          else{
            state.productData.push(action.payload)
          }
        },
        deleteItem:(state,action) =>{
           state.productData.filter((item) => item._id != action.payload)
       
      },
      resetCart:(state,action) =>{
        state.productData = []
      },
      incrementQuantity:(state,action) =>{
        const item = state.productData.find((item) => item._id === action.payload._id)
        if (item){
          item.quantity++
        }
      },
      decrementQuantity:(state,action) =>{
        const item = state.productData.find((item) => item._id === action.payload._id)
        if (item){
          item.quantity--
        }
      },
    },
});

export const {addToCart,deleteItem,resetCart,incrementQuantity,decrementQuantity} = gaytriSlice.actions
export default gaytriSlice.reducer
