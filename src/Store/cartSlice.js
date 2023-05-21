import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: []
};

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        create_data: (state, action) => {
            return {
                products: action.payload
            };
        }
    },
});

export const { create_data } = cartSlice.actions;

export default cartSlice.reducer;
