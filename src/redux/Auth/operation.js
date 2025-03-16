import axios from 'axios';
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

const logoutUser = createAsyncThunk("auth/logoutUser", async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token; // Token'ı store'dan al

    if (!token) {
        return thunkAPI.rejectWithValue("No token available"); // Eğer token yoksa, hata dön
    }

    try {
        const response = await axios.post(
        USERS_LOGOUT_URL,
        {},
        {
            headers: {
            Authorization: `Bearer ${token}`, // Header'a token'ı ekleyin
            },
        }
        );
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
        );
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