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
            <li style={{ padding: '20px' }} className={item.isCompleted ? "collection-item underscore  indigo lighten-4" : "collection-item"}>
                    <button className='btn button btn-primary primary-content'>
                        <i onClick={() => onMarkDone(item)} className="material-icons">check</i>
                    </button>
                {item.title}
                    <button className='btn button btn-primary secondary-content'>
                        <i onClick={() => deleteHandle(item)} className="material-icons">delete</i>
                    </button>
            </li>
        </>
    )
}

export default TodoItem;