import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null
};

// sample redux slice 
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        create_user: (state, action) => {
            state.user=action.payload
        },
        update_user:(state,action)=>{
            state.products = action.payload;
        },
        delete_user:(state,action)=>{
            state.user={}
            localStorage.removeItem('user')
        },
        
    },
});

export const { create_user,update_user,delete_user } = userSlice.actions;

export default userSlice.reducer;
