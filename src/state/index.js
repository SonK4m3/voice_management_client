import { combineReducers } from '@reduxjs/toolkit';
import { authApi, blogApi, fooApi } from './api';
import authSlice from '../store/authSlice';
import { cdrApi } from './cdrApi';

const rootReducer = combineReducers({
    [blogApi.reducerPath]: blogApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [fooApi.reducerPath]: fooApi.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
    [cdrApi.reducerPath]: cdrApi.reducer,
});

export { rootReducer };