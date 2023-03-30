import { createSlice } from "@reduxjs/toolkit";

const MenuSlice= createSlice({
    name: "menu",
    initialState:true,
    reducers:{
        isMenuopen: (state)=>{
          return  state= !state;
        },
        closeMenu:(state=>{
          return state= false;
        })
    }

})
export const {isMenuopen, closeMenu}= MenuSlice.actions;
export default MenuSlice.reducer;