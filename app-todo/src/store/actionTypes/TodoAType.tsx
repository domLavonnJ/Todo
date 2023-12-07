import { TodoAction } from "../actions/actions";


const addTodo = (data: any) => {
    return {
        type: TodoAction.addTodo,
        payload: data
    }
}

const eraseTodo = () => {
    return {
        type: TodoAction.eraseTodo,
        payload: []
    }
}

export { addTodo, eraseTodo }