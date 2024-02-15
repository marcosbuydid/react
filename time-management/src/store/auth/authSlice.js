import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        loginStatus: 'checking',
        user: {},
        errorMessage: undefined,
    },
    reducers: {
        onChecking: (state) => {
            state.loginStatus = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },
        onLogin: (state, { payload }) => {
            state.loginStatus = 'authenticated';
            state.user = { payload };
            state.errorMessage = undefined;
        },

    }
});

export const { onChecking, onLogin } = authSlice.actions;