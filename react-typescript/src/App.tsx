import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Todo from './containers/todo/todo';
import { ITodo } from './containers/interfaces';
import Counter from './containers/counter/counter';
import Form from './containers/form/index';
import Home from './containers/Home/Home';
import Charts from './containers/charts/charts';

const App: React.FC = () => {
    const [inputTitle, setInputTitle] = useState<string>('')
    const [todos, setTodos] = useState<ITodo[]>([]);

    const changeHandler = (event: string) => {
        setInputTitle(event);
    }

    const addHandler = (title: string) => {
        if (inputTitle) {
            const newTodo: ITodo = {
                id: Date.now(),
                title: inputTitle,
                isCompleted: false,
            }
            setTodos(prev => [newTodo, ...prev])
            setInputTitle('')
        } else {
            return null
        }

    }


    const deleteHandle = (id: number) => {
        const newList = todos.filter(item => item.id !== id)
        setTodos(newList);
    }

    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/todo'>
                        <Todo deleteHandle={deleteHandle}
                            inputTitle={inputTitle}
                            changeHandler={changeHandler}
                            addHandler={addHandler}
                            todos={todos} />
                    </Route>
                    <Route path='/counter' component={Counter} />
                    <Route path='/charts' component={Charts} />
                    <Route path='/form' component={Form} />
                </Switch>
            </Router>

        </>
    )
}

export default App;