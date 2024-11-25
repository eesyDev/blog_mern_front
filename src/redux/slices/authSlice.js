import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    isLoggedIn: false
}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.data = action.payload;
            state.isLoggedIn = action.payload.isLoggedIn;
        },
        logout: (state, action) => {
            state.data = null;
            state.isLoggedIn = false;
        },
        getProfile: (state, action) => {
            // state.data = action.payload;
            state.isLoggedIn = action.payload.isLoggedIn;
        }
    }
});

export const { login } = authSlice.actions;
export const { logout } = authSlice.actions;
export const { getProfile } = authSlice.actions;

export default authSlice.reducer