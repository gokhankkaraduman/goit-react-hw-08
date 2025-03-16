import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser, logoutUser, currentUser } from "./operation";
import { toast } from "react-toastify";
import axios from "axios";


const toastSettings = {
    duration: 5000,
    position: "top-center",
    style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
    },
    success: {
        icon: "✅",
    },
    error: {
        icon: "❌",
    },
};

const updateAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = null;
};


const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isError: false,
    isLoading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers(builder) {
        builder
        .addCase(registerUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isRefreshing = false;
            state.isLoading = false;
            state.isError = false;
            toast.success("Registration successful", toastSettings.success);
            updateAuthHeader(action.payload.token);
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.isRefreshing = false;
            state.isError = true;
            state.isLoading = false;
            toast.error(
                "We couldn't create your account. Please double-check your info and try again!",
                toastSettings.error
            );
        })
        .addCase(registerUser.pending, (state) => {
            state.isRefreshing = true;
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.isRefreshing = false;
            state.isLoading = false;
            state.isError = false;
            toast.success("Login successful", toastSettings.success);
            updateAuthHeader(action.payload.token);
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.isRefreshing = false;
            state.isError = true;
            state.isLoading = false;
            toast.error(
                "We couldn't log you in. Please double-check your info and try again!",
                toastSettings.error
            );
        })
        .addCase(loginUser.pending, (state) => {
            state.isRefreshing = true;
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(logoutUser.fulfilled, (state) => {
            state.user = initialState.user;
            state.token = initialState.token;
            state.isLoggedIn = false;
            state.isRefreshing = false;
            state.isLoading = false;
            state.isError = false;
            toast.success("Logout successful", toastSettings.success);
            clearAuthHeader();
        })
        .addCase(logoutUser.rejected, (state) => {
            state.isRefreshing = false;
            state.isError = true;
            state.isLoading = false;
            toast.error(
                "We couldn't log you out. Please try again!",
                toastSettings.error
            );
        })
        .addCase(logoutUser.pending, (state) => {
            state.isRefreshing = true;
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(currentUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
            state.isLoading = false;
            state.isError = false;
        })
        .addCase(currentUser.rejected, (state) => {
            state.user = initialState.user;
            state.token = initialState.token;
            state.isLoggedIn = false;
            state.isRefreshing = false;
            state.isLoading = false;
            state.isError = false;
            clearAuthHeader();
        })
        .addCase(currentUser.pending, (state) => {
            state.isRefreshing = true;
            state.isError = false;
            state.isLoading = true;
        });
    }
    });

export default authSlice.reducer;