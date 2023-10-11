import { createSlice } from "@reduxjs/toolkit";

const reduxSlice = createSlice({
    name: "ReduxS",
    initialState: {
        isMenuOpen: true
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
    },
});

export const {toggleMenu} = reduxSlice.actions;
export default reduxSlice.reducer;
