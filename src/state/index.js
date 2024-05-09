import { combineReducers } from '@reduxjs/toolkit';
import { authApi, blogApi, fooApi } from './api';
import authSlice from '../store/authSlice';
import { cdrApi } from './cdrApi';
import drawerSlice from '../store/drawerSlice';
import { authorizeApi } from './authorizeApi';

const rootReducer = combineReducers({
    [blogApi.reducerPath]: blogApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [fooApi.reducerPath]: fooApi.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
    [drawerSlice.reducerPath]: drawerSlice.reducer,
    [cdrApi.reducerPath]: cdrApi.reducer,
    [authorizeApi.reducerPath]: authorizeApi.reducer,
});

export { rootReducer };