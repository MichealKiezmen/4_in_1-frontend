import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage';

import userReducer from "./Slices/userSlice";
import sharedReducer from "./Slices/sharedSlice"

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, userReducer)

const store = configureStore({
    reducer: {
        persistedReducer,
        shared: sharedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

const persistor = persistStore(store)

export { store, persistor }
