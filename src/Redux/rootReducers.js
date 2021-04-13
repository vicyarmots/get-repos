import { repositoryReducer } from './repos/repositoryReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({ repositoryReducer });

export default allReducers;
