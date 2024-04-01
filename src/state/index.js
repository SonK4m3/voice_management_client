import { combineReducers } from '@reduxjs/toolkit';
import { authApi, blogApi, fooApi } from './api';
import authSlice from '../store/authSlice';

const rootReducer = combineReducers({
    [blogApi.reducerPath]: blogApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [fooApi.reducerPath]: fooApi.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
});

export { rootReducer };