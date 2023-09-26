import { createSlice } from '@reduxjs/toolkit';
import { getDataLS, } from '../helper/localStorage';
import { createDataLS } from '../helper/localStorage';

const initialState = {
    products: [
        ...(getDataLS('wishList') || [])
    ]
};

export const wishListSlice = createSlice({
    name: 'wishListSlice',
    initialState,
    reducers: {
        create_WishList: (state, action) => {
            const product = action.payload;
            const newWishList = getDataLS('wishList') ?? [];
            let WishListObj={};
            WishListObj.product_id =product._id;
            WishListObj.id=newWishList?.length ?? 0;
            newWishList.push(WishListObj);
            createDataLS(newWishList,'wishList');

            if(product) WishListObj.product={...product};
            const newState=[...state.products];
            newState.push(WishListObj);
             state.products= newState;
        },
        update_WishList:(state,action)=>{
            state.products = action.payload;
        },
        delete_WishList_product:(state,action)=>{
            const localStorageWishList=getDataLS('wishList');
            const newLocalStorageData = localStorageWishList.filter(p=>p.id!==action.payload);
            createDataLS(newLocalStorageData,'wishList');
            state.products = state.products.filter(p=>p.id!==action.payload);
        },
        
    },
});

export const { create_WishList,update_WishList,delete_WishList_product } = wishListSlice.actions;

export default wishListSlice.reducer;
