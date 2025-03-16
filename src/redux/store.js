import { configureStore } from "@reduxjs/toolkit";
import authSlice  from "./Auth/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "auth",
    storage,
};

const persistedReducer = persistReducer(persistConfig, authSlice);

const store = configureStore({
    reducer: {
        auth: persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;