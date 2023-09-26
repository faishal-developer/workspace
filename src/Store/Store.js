import { combineReducers, configureStore } from '@reduxjs/toolkit';
import catSlice from './Cat_slice';
import SubcatSlice from './Sub_catSlice';
import cartSlice from './cartSlice';
import userSlice from './userSlice';
import sampleCartSlice from './sampleCartSlice';
import wishListSlice from './wishListSlice';

const rootReducer = combineReducers({
        sampleCartSlice,
        catSlice,
        SubcatSlice,
        cartSlice,
        userSlice,
        wishListSlice
})
// const storageReducer = combineReducers({
//     testSlice2
// })
// const persistConfig = {
//     key: 'persisted',
//     storage,
//     whitelist: ['persistedData'],
// };


// const persistedStore = configureStore({
//     reducer: persistReducer(persistConfig, storageReducer),
// });

const temporaryStore = configureStore({
    reducer: rootReducer,
});

// const persistor = persistStore(persistedStore);
export { temporaryStore };

