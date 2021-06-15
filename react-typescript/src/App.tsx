import React, { useState, useRef, useContext, createContext, useReducer } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Todo from './containers/todo/todo';
import { ITodo } from './containers/interfaces';
import Counter from './containers/counter/counter';
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
}

export default App