import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    isOpen: false
};

export const testSlice2 = createSlice({
    name: 'testSlice2',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        setDrawer: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
    extraReducers: {},
});

export const { increment, decrement, setDrawer } = testSlice2.actions;

export default testSlice2.reducer;
