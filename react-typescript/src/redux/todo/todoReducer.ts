import { Reducer } from 'react';
import { ITodo, TodoState } from '../../type';
import { INewTodo } from "./todoACreators";
import * as actionTypes from '../actionTypes';

const initState: TodoState = {
    todos: [
        {
            id: 1,
            title: "post 1",
            isCompleted: false,

        },
        {
            id: 2,
            title: "post 2",
            isCompleted: false,
        },
    ],
}

const todoReducer: Reducer<TodoState, INewTodo> = (state = initState, action): TodoState => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            const newTodo: ITodo = {
                id: Date.now(),
                title: action.payload.title,
                isCompleted: false,
            }
            return {
                ...state,
                todos: state.todos.concat(newTodo)
            }
        case actionTypes.REMOVE_TODO:
            const { id } = action.payload
            const updatedTodos: ITodo[] = state.todos.filter((todo: { id: number }) => todo.id !== id)
            return {
                ...state,
                todos: updatedTodos,
            }
        case actionTypes.ON_MARK_TODO: {
            const { id } = action.payload
            const newTodos = [...state.todos];
            newTodos.map(item => {
                return item.id === id ? item.isCompleted = !item.isCompleted : null
            })
            return {
                ...state,
                todos: newTodos,
            }
        }
    }
    return state
}

export default todoReducer;