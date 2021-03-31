import { reposReducer } from './repos/reposReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({ reposReducer });

export default allReducers;
