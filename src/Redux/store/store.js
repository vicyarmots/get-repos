import allReducers from '../rootReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
