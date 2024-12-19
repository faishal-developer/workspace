import { combineReducers, configureStore } from '@reduxjs/toolkit';

// import sampleCartSlice from './sampleCartSlice';
import { userSlice } from './userCartSlice';

const rootReducer = combineReducers({
        // sampleCartSlice,
        userSlice
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

