import { combineReducers } from 'redux';
import  taskReducer from './reducers';

const rootReducer = combineReducers({
		task: taskReducer
});

export default rootReducer;
