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
import BookStore from './containers/bookStore/index';
import BookCard from './containers/bookStore/components/bookCard';
import OrderForm from './containers/forms/OrderForm/orderForm';
import Basket from './containers/bookStore/components/basket';


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
          <Route exact path='/books' component={BookStore} />
          <Route path='/books/:id' component={BookCard} />
          <Route path='/backet' component={Basket} />
          <Route path='/order' component={OrderForm} />
        </Switch>
      </Router>

    </>
  )
}

export default App