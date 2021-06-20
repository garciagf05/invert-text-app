import { combineReducers } from 'redux'
import iechoReducer from './iecho';
 
const rootReducer =combineReducers({
    iecho: iechoReducer,
})
 
export default rootReducer;