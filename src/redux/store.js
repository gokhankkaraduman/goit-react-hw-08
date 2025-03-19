import { configureStore } from "@reduxjs/toolkit";
import authSlice  from "./Auth/slice";
import contactsReducer from "./Contacts/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import filtersReducer from './Filters/slice'

const persistConfig = {
    key: "auth",
    storage,
};

const persistedReducer = persistReducer(persistConfig, authSlice);

const store = configureStore({
    reducer: {
        auth: persistedReducer,
        contacts: contactsReducer,
        filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
export default store;