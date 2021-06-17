import React from 'react';
import TodoItem from './todoItem'

type Todos = {
    todos: ITodo[]
    deleteHandle: (item: number) => void
    onMarkDone: (id: number) => void
}

const TodoList: React.FC<Todos> = ({ todos, deleteHandle, onMarkDone }) => {
    return (
        <>
            <ul className="collection">
                {todos.map(item => <TodoItem key={item.id} onMarkDone={onMarkDone} deleteHandle={deleteHandle} item={item} />)}
            </ul>
        </>
    )
}

export default TodoList;