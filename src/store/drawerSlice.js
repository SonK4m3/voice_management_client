// drawerSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDrawerOpen: false,
};

const drawerSlice = createSlice({
    name: "drawer",
    initialState,
    reducers: {
        toggleDrawer(state) {
            state.isDrawerOpen = !state.isDrawerOpen;
        },
        openDrawer(state) {
            state.isDrawerOpen = true;
        },
        closeDrawer(state) {
            state.isDrawerOpen = false;
        }
    },
});

export const { toggleDrawer, closeDrawer, openDrawer } = drawerSlice.actions;
export default drawerSlice;
