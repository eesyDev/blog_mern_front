import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";

export default configureStore({
    reducer: {
        [authApi.reducerPath] : authApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
        authApi.middleware
    ) 
})