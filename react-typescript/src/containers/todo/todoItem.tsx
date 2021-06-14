import React from 'react';
import './todo.css';

type ItemTodo = {
    item: any
    deleteHandle: (item: number) => void
    onMarkDone: (id: number) => void
}

const TodoItem: React.FC<ItemTodo> = ({ item, deleteHandle, onMarkDone }) => {


    return (
        <>
            <li onClick={() => onMarkDone(item.id)} className={item.isCompleted ? "collection-item underscore red accent-4" : "collection-item"}>
                {item.title}<a onClick={() => deleteHandle(item.id)} className="secondary-content">
                    <i className="material-icons">delete</i>
                </a>
            </li>
        </>
    )
}

export default TodoItem;