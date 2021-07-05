import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './utils/rootReducer';

const createReduxStore = (preloadedState = {}) =>
    configureStore({
        reducer: rootReducer,
        preloadedState,
    });

export default createReduxStore;
