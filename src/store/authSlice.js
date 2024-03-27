import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    token: null,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart(state) {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess(state, action) {
            state.isLoggedIn = true;
            state.token = action.payload.token;
            state.isLoading = false;
            state.error = null;

            localStorage.setItem('token', action.payload.token);
        },
        logout(state) {
            state.isLoggedIn = false;
            state.token = null;
            state.isLoading = false;
            state.error = null;

            localStorage.removeItem('token');
            window.location.reload();
        },
        // ... (Add logout, error handling as needed)
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;