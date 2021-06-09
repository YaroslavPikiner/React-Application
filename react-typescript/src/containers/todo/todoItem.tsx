import React from 'react';

type ItemTodo = {
    item: any
    deleteHandle: (item: number) => void
}

const TodoItem: React.FC<ItemTodo> = ({ item, deleteHandle }) => {
    return (
        <>
            <li className="collection-item"><div>{item.title}<a onClick={() => deleteHandle(item.id)} className="secondary-content"><i className="material-icons">delete</i></a></div></li>
        </>
    )
}

export default TodoItem;