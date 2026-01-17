
import { createSlice, isAction } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: null,
    accessToken: null,
    refreshToken: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user, access, refresh } = action.payload;
            state.user = user;
            state.accessToken = access;
            state.refreshToken = refresh;
            state.isAuthenticated = true;
        },
        logOut: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
        },
    },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.accessToken;
