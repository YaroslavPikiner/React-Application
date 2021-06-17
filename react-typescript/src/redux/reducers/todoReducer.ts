import { Reducer } from 'react';
import { TodoState } from '../../type';
import { INewTodo } from "../actionCreators";


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

const todoReducer: Reducer<TodoState, INewTodo> = (state = initState, action) => {
    switch (action.type) {

        
    }
    return state
}