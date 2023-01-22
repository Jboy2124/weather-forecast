import { configureStore } from "@reduxjs/toolkit";
import CitySlice from './slices/SliceCity'

const store = configureStore({
    reducer: {
        currentCity: CitySlice
    }
});

export default store;