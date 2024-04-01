import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    accessToken: null,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducerPath: 'auth',
    reducers: {
        loginStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess(state, action) {
            state.isLoggedIn = true;
            state.accessToken = action.payload.accessToken;
            state.isLoading = false;
            state.error = null;

            localStorage.setItem('accessToken', action.payload.accessToken);
        },
        logout(state) {
            state.isLoggedIn = false;
            state.accessToken = null;
            state.isLoading = false;
            state.error = null;

            localStorage.removeItem('accessToken');
            window.location.reload();
        },
        // ... (Add logout, error handling as needed)
    },
});

export const authActions = authSlice.actions;
export default authSlice;