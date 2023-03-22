import { createSlice } from "@reduxjs/toolkit";

const MenuSlice= createSlice({
    name: "menu",
    initialState:true,
    reducers:{
        isMenuopen: (state)=>{
          return  state= !state;
        }
    }

})
export const {isMenuopen}= MenuSlice.actions;
export default MenuSlice.reducer;