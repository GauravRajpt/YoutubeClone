import { createSlice } from "@reduxjs/toolkit";


const CartSlice= createSlice({
    name: "cart",
    initialState:[],
    reducers: {
        additem: (state, action)=>{
            state.push(action.payload);
        },
        removeItem:(state, action)=>{
          return  state.filter((item)=> item.id!==action.payload);
        }
    }
})
export const {additem, removeItem}= CartSlice.actions;
export default CartSlice.reducer;