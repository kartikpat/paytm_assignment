import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './utils/rootReducer';

const createReduxStore = (preloadedState = {}) =>
    createStore(
        combineReducers(rootReducer),
        preloadedState,
        applyMiddleware(thunk)
    );
console.log('aa');
export default createReduxStore;
