import React from 'react';
import { ITodo } from '../interfaces';
import TodoItem from './todoItem'

type Todos = {
    todos: ITodo[]
    deleteHandle: (item: number) => void
}

const TodoList: React.FC<Todos> = ({ todos, deleteHandle }) => {
    return (
        <>
            <ul className="collection">
                {todos.map(item => <TodoItem key={item.id} deleteHandle={deleteHandle} item={item} />)}
            </ul>
        </>
    )
}

export default TodoList;