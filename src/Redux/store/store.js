import allReducers from '../rootReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(thunk))
);
