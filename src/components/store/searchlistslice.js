import { createSlice } from "@reduxjs/toolkit";

const searchlistSlice= createSlice({
    name:'searchlist',
    initialState:null,
    reducers:{
        searchlistdata:(state,action)=>{
            return state= action.payload;
        },
       
        
    }
})
export const {searchlistdata}= searchlistSlice.actions;
export default searchlistSlice.reducer;