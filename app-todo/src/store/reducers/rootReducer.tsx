import { combineReducers } from "redux";
import PersonReducer from "./personReducer";

const rootReducer =  combineReducers({
personR: PersonReducer
})

export default rootReducer;