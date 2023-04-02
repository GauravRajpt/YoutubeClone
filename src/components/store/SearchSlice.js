import { createSlice } from "@reduxjs/toolkit";

const searchslice= createSlice({
    name: "search",
    initialState: {

    },
    reducers:{
        storeCache: (state, action)=>{
            state= Object.assign(state,action.payload)
        }
    }
})
export const {storeCache}= searchslice.actions;
export default searchslice.reducer;


/*
if(state has == searchstring){
    setsuggestion(state);

}
else{
    fetch()
    setsugesstion(json[1]);
}


*/ 