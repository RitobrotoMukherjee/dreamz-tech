import { configureStore } from '@reduxjs/toolkit';
import states from './states/states';

export default configureStore({
    reducer: {
        states
    }
});
