import { combineReducers } from "redux";
import PersonReducer from "./personReducer";
import TodoReducer from "./todoReducer";

const rootReducer = combineReducers({
    personR: PersonReducer,
    todoR: TodoReducer
})

export default rootReducer;