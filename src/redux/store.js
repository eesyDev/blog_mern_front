import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import { postApi } from "./services/postApi";
import authReducer from './slices/authSlice';

export default configureStore({
    reducer: {
        [authApi.reducerPath] : authApi.reducer,
        authSlice: authReducer,
        [postApi.reducerPath] : postApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
        authApi.middleware,
        postApi.middleware
    ) 
})