import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cat:[]
};

export const catSlice = createSlice({
    name: 'catSlice',
    initialState,
    reducers: {
        create_data:(state,action)=>{
            return {
                cat: action.payload
            };
        }
    },
});

export const { create_data } = catSlice.actions;

export default catSlice.reducer;
