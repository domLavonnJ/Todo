import { TodoAction } from "../actions/actions";
import ITodo from "./interfaces/ITodo";

let initialState: string[] = []

const TodoReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case TodoAction.addTodo:
            return [
                ...state,
                action.payload
            ]
        case TodoAction.eraseTodo:
            return {
                ...state,
                todoList: []
            }
        default:
            return state
    }
}

export default TodoReducer;