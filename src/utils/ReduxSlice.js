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
        closeMenu: (state) => {
            state.isMenuOpen = false
        }
    },
});

export const { toggleMenu, closeMenu } = reduxSlice.actions;
export default reduxSlice.reducer;
