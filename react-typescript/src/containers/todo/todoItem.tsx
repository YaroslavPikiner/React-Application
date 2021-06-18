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
                <a style={{ margin: '20px' }} className="primary-content">
                    <button className='btn btn-primary'>
                        <i onClick={() => onMarkDone(item)} className="material-icons">check</i>
                    </button>
                </a>
                {item.title}
                <a className="secondary-content ">
                    <button className='btn btn-primary '>
                        <i onClick={() => deleteHandle(item)} className="material-icons">delete</i>
                    </button>
                </a>
            </li>
        </>
    )
}

export default TodoItem;