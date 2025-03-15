import axios from 'axios';
import {toast} from 'react-toastify';
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    BASE_URL,
    USERS_REGISTER_URL,
    USERS_LOGIN_URL,
    USERS_LOGOUT_URL,
    USERS_CURRENT_URL,
} from "../../services/apiService";

const registerUser = createAsyncThunk('auth/registerUser', async (registerInfo, thunkAPI) => {
    try {
        const response = await axios.post(USERS_REGISTER_URL, registerInfo);
        return response.data;
    }catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const loginUser = createAsyncThunk('auth/loginUser', async (loginInfo, thunkAPI) => {
    try {
        const response = await axios.post(USERS_LOGIN_URL, loginInfo);
        return response.data;
    }catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const logoutUser = createAsyncThunk('auth/logoutUser', async (logoutInfo, thunkAPI) => {
    try {
        const response = await axios.post(USERS_LOGOUT_URL, logoutInfo);
        return response.data;
    }catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
const currentUser = createAsyncThunk(
    "auth/current",
    async (currentInfo, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
        return thunkAPI.rejectWithValue("No token provided");
        }

        try {
        const response = await axios.get(USERS_CURRENT_URL, {
            headers: { Authorization: `Bearer ${persistedToken}` },
        });
        return response.data;
        } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export { registerUser, loginUser, logoutUser, currentUser };