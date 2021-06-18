import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Todo from './containers/todo/todo';
import Counter from './containers/counter/counter';
import Home from './containers/Home/Home';
import Charts from './containers/charts/charts';
import Forms from './containers/forms';
import MainArticle from './containers/articles/index';
import SpaceStation from './containers/spaceStation/index';
import Timer from './containers/timer/index';

const App: React.FC = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/todo'>
            <Todo />
          </Route>
          <Route path='/counter' component={Counter} />
          <Route path='/charts' component={Charts} />
          <Route path='/forms' component={Forms} />
          <Route path='/articles' component={MainArticle} />
          <Route path='/space' component={SpaceStation} />
          <Route path='/timer' component={Timer} />
        </Switch>
      </Router>

    </>
  )
}

export default App