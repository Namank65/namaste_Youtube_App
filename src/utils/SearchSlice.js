import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        cashResults: (state, action) => {
            state = { ...action.payload, ...state }
        }
    }
})

export const { cashResults } = searchSlice.actions;
export default searchSlice.reducer;