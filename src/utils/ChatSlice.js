import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
    name: "chat",
    initialState: {
        message:[]
    },
    reducers: {
        addMessages: (state, action) => {
            state.message.splice(8, 1)
            state.message.unshift(action.payload)
        } 
    }
});

export const {addMessages} = ChatSlice.actions;
export default ChatSlice.reducer;