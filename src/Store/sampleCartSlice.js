import { createSlice } from '@reduxjs/toolkit';
import { getDataLS, } from '../helper/localStorage';
import { createDataLS } from '../helper/localStorage';

const initialState = {
    products: [
        ...(getDataLS('cart') || [])
    ]
};

export const sampleCartSlice = createSlice({
    name: 'sampleCartSlice',
    initialState,
    reducers: {
        create_cart: (state, action) => {
            const {product,cart,size} = action.payload;
            const newCart = getDataLS('cart') ?? [];
            console.log(newCart);
            let cartObj={};
            cartObj.product =product._id;
            cartObj.quantity = cart;
            cartObj.sizes=size;
            cartObj.price = product.price*cart;
            cartObj.id=newCart?.length ?? 0;
            newCart.push(cartObj);
            createDataLS(newCart,'cart');

            if(product) cartObj.product_data={...product};
            const newState=[...state.products];
            newState.push(cartObj);
             state.products= newState;
        },
        update_cart:(state,action)=>{
            state.products = action.payload;
        },
        delete_cart_product:(state,action)=>{
            const localStorageCart=getDataLS('cart');
            const newLocalStorageData = localStorageCart.filter(p=>p.id!==action.payload);
            console.log("deleteCart",action.payload,newLocalStorageData);
            createDataLS(newLocalStorageData,'cart');
            state.products = state.products.filter(p=>p.id!==action.payload);
        },
        
    },
});

export const { create_cart,getCartFromLocalStorage,update_cart,delete_cart_product } = sampleCartSlice.actions;

export default sampleCartSlice.reducer;
