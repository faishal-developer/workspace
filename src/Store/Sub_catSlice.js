import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    SubCategories: []
};

export const SubcatSlice = createSlice({
    name: 'SubcatSlice',
    initialState,
    reducers: {
        create_data: (state, action) => {
            return {
                SubCategories: action.payload
            };
        }
    },
});

export const { create_data } = SubcatSlice.actions;

export default SubcatSlice.reducer;
