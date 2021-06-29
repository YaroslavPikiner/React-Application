import React, { useState } from 'react'
import { ITodo } from '../../type'
import TodoForm from './todoForm'
import TodoList from './todoList'
import { addTodo, onMarkTodo, removeTodo } from "../../redux/todo/todoACreators";
import { Dispatch } from "redux"
import { IAppState } from "../../redux/reducers/rootReducer";
import { useSelector, useDispatch } from 'react-redux';

const Todo: React.FC = () => {
    const [inputTitle, setInputTitle] = useState<string>('')
    const todos: ITodo[] = useSelector((state: IAppState) => state.todoReducer.todos)
    const dispatch: Dispatch<any> = useDispatch()

    const changeHandler = (event: string) => {
        setInputTitle(event);
    }

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            id: Date.now(),
            title: inputTitle,
            isCompleted: false,
        }
        dispatch(addTodo(newTodo))
        setInputTitle('')
    }

    const deleteHandle = (id: number) => {
        console.log(id);
        return dispatch(removeTodo(id));
    }

    const onMarkDone = (id: number) => {
        return dispatch(onMarkTodo(id));
    }

    return (
        <>
            <div className="container">
                <TodoForm inputTitle={inputTitle} addHandler={addHandler} changeHandler={changeHandler} />
                <TodoList todos={todos} deleteHandle={deleteHandle} onMarkDone={onMarkDone} />
            </div>
        </>
    )
}

export default Todo;