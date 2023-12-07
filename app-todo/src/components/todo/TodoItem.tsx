import React from 'react'

type TodoProps = {
    text: string,

}

const TodoItem = (props: TodoProps) => {
    return (
        <>
            <div>
                <p>{props.text} </p>
                <button style={{ backgroundColor: 'red', color: "white" }}>delete</button>
            </div>
        </>
    )
}


export default TodoItem