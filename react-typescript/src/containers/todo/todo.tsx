import React from 'react'
import { ITodo } from '../interfaces'
import TodoForm from './todoForm'
import TodoList from './todoList'

interface TodoProps {
    inputTitle: string
    changeHandler: (event: any) => void
    addHandler: (event: any) => void
    todos: ITodo[]
    deleteHandle: (item: number) => void
}


const Todo: React.FC<TodoProps> = ({ inputTitle, changeHandler, addHandler, todos, deleteHandle }) => {

    return (
        <>
            <TodoForm inputTitle={inputTitle} addHandler={addHandler} changeHandler={changeHandler} />
            <TodoList todos={todos} deleteHandle={deleteHandle}/>
        </>
    )
}


export default Todo;