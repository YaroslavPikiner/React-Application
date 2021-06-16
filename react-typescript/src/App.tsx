<<<<<<< HEAD
import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
=======
import React, { useState, useRef, useContext, createContext, useReducer } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
>>>>>>> 221627c7c9dd459009914c5273f7ab8c4e3e3375
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Todo from './containers/todo/todo';
import { ITodo } from './containers/interfaces';
import Counter from './containers/counter/counter';
<<<<<<< HEAD
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
=======
import Home from './containers/Home/Home';
import Charts from './containers/charts/charts';
import Forms from './containers/forms';
import MainArticle from './containers/articles/index';
import SpaceStation from './containers/spaceStation/index';

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
      isCompleted: false,
    }
    setTodos(prev => [newTodo, ...prev])
    setInputTitle('')
  }


  const deleteHandle = (id: number) => {
    const newList = todos.filter(item => item.id !== id)
    setTodos(newList);
  }


  const onMarkDone = (id: number) => {
    const newTodos = [...todos];
    newTodos.map(item => {
      return item.id === id ? item.isCompleted = !item.isCompleted : null
    })
    setTodos(newTodos)
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
              onMarkDone={onMarkDone}
              todos={todos}
            />
          </Route>
          <Route path='/counter' component={Counter} />
          <Route path='/charts' component={Charts} />
          <Route path='/forms' component={Forms} />
          <Route path='/articles' component={MainArticle} />
          <Route path='/space' component={SpaceStation} />

        </Switch>
      </Router>

    </>
  )
>>>>>>> 221627c7c9dd459009914c5273f7ab8c4e3e3375
}

export default App