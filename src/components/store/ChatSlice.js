import { createSlice } from "@reduxjs/toolkit";

const ChatSlice= createSlice({
    name:'chat',
    initialState:[

    ],
    reducers:{
        addchat:(state,action)=>{
            state.splice(25,1)
           state.unshift(action.payload);
        }
    }
})
export const {addchat}= ChatSlice.actions;
export default ChatSlice.reducer;