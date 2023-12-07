import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addTodo, eraseTodo} from '../../store/actionTypes/TodoAType';
import TodoItem from './TodoItem';

const Todo = () => {

    const [todoText, setTodo] = useState("")

    const dispatch = useDispatch()
    const personName = useSelector((store: any) => store.personR.name)
    const todoLists = useSelector((store: any) => store.todoR)

    const addTodoList = () => {
        if(todoText === "") {
            return
        }
        console.log(todoText)
        dispatch(addTodo(todoText))

    }
    
    return (<div>
        {personName === "" && <h1> Please verify name!</h1>
            || personName !== "" && <div>
                <h3> {personName} enter your todo:</h3>
                <input type="text"
                    placeholder="Enter you todos"
                    value={todoText}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button onClick={addTodoList}> Add </button>
                
                { todoLists.length > 0 &&  <ul>
                    { todoLists.map((item:any )=> (<TodoItem text={item}  />) ) }
                </ul>
                }

{/* //<li key={item}> {item}</li>) */}
            </div>

        }

    </div>
    )
}

export default Todo