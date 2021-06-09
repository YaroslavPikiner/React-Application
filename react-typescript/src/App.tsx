import React, { useState, useRef, useContext, createContext, useReducer } from 'react';
import Navbar from './components/Navbar';
import Todo from './containers/todo/todo';
import { ITodo } from './containers/interfaces';

const App: React.FC = () => {
    const [inputTitle, setInputTitle] = useState<string>('')
    const [todos, setTodos] = useState<ITodo[]>([]);

    const changeHandler = (event: string) => {
        setInputTitle(event);
    }

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            id: Date.now(),
            title: inputTitle,
            completed: false,
        }
        setTodos(prev => [newTodo, ...prev])
        setInputTitle('')
    }


    const deleteHandle = (id: number) => {
        const newList = todos.filter(item => item.id !== id)
        setTodos(newList);
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <h1>Test</h1>
                <Todo deleteHandle={deleteHandle} inputTitle={inputTitle} changeHandler={changeHandler} addHandler={addHandler} todos={todos} />
            </div>
        </>
    )
}

export default App;
