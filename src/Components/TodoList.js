import React from 'react'
import Todo from './Todo'

function TodoList(props) {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {props.todos.length === 0 ? <h2>Nothing ToDo :)</h2> :
                        props.filteredTodos.map((todo) => {
                            return (
                                <Todo text={todo.text} key={todo.id} todos={props.todos} setTodos={props.setTodos} todo={todo} />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default TodoList