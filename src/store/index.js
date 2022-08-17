import { configureStore } from '@reduxjs/toolkit'
import app from './modules/app'
import date from './modules/date'
import user from './modules/user'
const store = configureStore({
    reducer: {
        app,
        date,
        user
    }, 
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store