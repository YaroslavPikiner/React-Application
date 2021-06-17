import React from 'react'
import TodoForm from './todoForm'
import TodoList from './todoList'

interface TodoProps {
    inputTitle: string
    changeHandler: (event: string) => void
    addHandler: (title: string) => void
    todos: ITodo[]
    deleteHandle: (item: number) => void
    onMarkDone: (id: number) => void
}


const Todo: React.FC<TodoProps> = ({ inputTitle, changeHandler, addHandler, todos, deleteHandle, onMarkDone }) => {

    return (
        <>
            <div className="container">
                <TodoForm inputTitle={inputTitle} addHandler={addHandler} changeHandler={changeHandler} />
                <TodoList todos={todos} deleteHandle={deleteHandle} onMarkDone={onMarkDone}/>
            </div>
        </>
    )
}


export default Todo;