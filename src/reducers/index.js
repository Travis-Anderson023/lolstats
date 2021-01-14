import routesReducer from './routes';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    routes: routesReducer
})

export default allReducers