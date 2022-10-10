import { configureStore } from '@reduxjs/toolkit';
import states from './states/states';

const store = configureStore({
    reducer: {
        states
    }
});

export default store;
