import cartReducer from "./cartReducer";
import {combineReducers} from 'redux'
const cartApp=combineReducers({
   cart:cartReducer
})
export default cartApp