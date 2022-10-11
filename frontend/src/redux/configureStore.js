import { configureStore } from '@reduxjs/toolkit';
import states from './states/states';
import taxes from './taxes/taxReducer';

const store = configureStore({
    reducer: {
        states,
        taxes
    }
});

export default store;
