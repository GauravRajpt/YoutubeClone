import { createSlice } from "@reduxjs/toolkit";

const ChatSlice= createSlice({
    name:'chat',
    initialState:[

    ],
    reducers:{
        addchat:(state,action)=>{
           state.push(action.payload);
        }
    }
})
export const {addchat}= ChatSlice.actions;
export default ChatSlice.reducer;