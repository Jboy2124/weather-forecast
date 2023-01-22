import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
    name: 'city',
    initialState: { value: '' },
    reducers: {
        getCity: (state, action) => {
            state.value = action.payload
        }
    }
});

export const actions = citySlice.actions
export default citySlice.reducer