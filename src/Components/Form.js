import React from 'react'

function Form(props) {

    const inputTextHandler = (e) => {
        props.setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        if (props.inputText === "") {
            alert("ToDo cannot be blank!");
        }
        else {
            e.preventDefault();
            let id;
            if (props.todos.length !== 0) {
                id = props.todos[props.todos.length - 1].id + 1;
            }
            else {
                id = 1;
            }
            props.setTodos([...props.todos, {
                text: props.inputText,
                completed: false,
                id: id
            }]);
            props.setInputText("");
        }
    }

    const statusHandler = (e) => {
        props.setStatus(e.target.value);
    }

    return (
        <div>
            <form>
                <input value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input" />
                <button onClick={submitHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form