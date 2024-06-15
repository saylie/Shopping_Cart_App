import { configureStore } from "@reduxjs/toolkit";
import { thunk }from 'redux-thunk';
import ProductReducer from "../reducers/ProductReducer";

const store  = configureStore({
    reducer: {
        ProductReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})

export default store;