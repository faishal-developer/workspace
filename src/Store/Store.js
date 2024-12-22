import { combineReducers, configureStore } from '@reduxjs/toolkit';

// import sampleCartSlice from './sampleCartSlice';
import { userSlice } from './userCartSlice';

const rootReducer = combineReducers({
        // sampleCartSlice,
        userSlice
})


// main redux store 

const temporaryStore = configureStore({
    reducer: rootReducer,
});

// const persistor = persistStore(persistedStore);
export { temporaryStore };

