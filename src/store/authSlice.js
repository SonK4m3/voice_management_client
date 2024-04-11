import { createSlice } from '@reduxjs/toolkit';
import { parseJWT } from '../utils/parse';

const initialUser = {
    id: null,
    email: null,
    name: null,
    role: null,
    iat: null,
    exp: null,
}

const initialState = {
    isLoggedIn: false,
    accessToken: null,
    isLoading: false,
    error: null,
    user: initialUser
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
            const decoded = parseJWT(action.payload.accessToken);
            state.user = decoded;

        },
        logout(state) {
            state.isLoggedIn = false;
            state.accessToken = null;
            state.isLoading = false;
            state.error = null;
            state.user = initialUser;

            localStorage.removeItem('accessToken');
            window.location.reload();
        },
        relogin(state, action) {
            state.isLoggedIn = true;
            state.accessToken = action.payload.accessToken;
            state.isLoading = false;
            state.error = null;

            const decoded = parseJWT(action.payload.accessToken);
            state.user = decoded;

        },
        // ... (Add logout, error handling as needed)
    },
});

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const authActions = authSlice.actions;
export default authSlice;