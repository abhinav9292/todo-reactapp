import React from 'react'

const Todos = ({ todos, deleteTodo }) => {
    const todoList =  todos.length ? (
    // to iterate over the todo list 
        todos.map( todo => {
            return(
                <div className="collection-item" key= { todo.id }>
                    <span onClick = { ()=> { deleteTodo(todo.id) } }> {todo.content} </span>    
                </div>
            )
        })
    ) 
    // if there are no todos left
    : (
        <p className="center">There are no todos left</p>
    )
    return(
        <div className="todos collection">
            { todoList }
        </div>
    )
}

export default Todos;