import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import authReducer from './slices/authSlice';

export default configureStore({
    reducer: {
        [authApi.reducerPath] : authApi.reducer,
        authSlice: authReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
        authApi.middleware
    ) 
})