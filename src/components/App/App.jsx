import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';

import PizzaList from '../PizzaList/PizzaList';

function App() {

  // setup dispatch
  const dispatch = useDispatch();

  // setup useEffect to call fetchPizza function
  useEffect(() => {
    fetchPizza();
  }, []);

  const fetchPizza = () => {
    console.log('in fetchPizza');

    // send request to server side
    axios.get('/api/pizza')
      .then((res) => {
        // tell client of success
        console.log('pizza from database:', res.data);

        // send data to pizzaReducer
        dispatch({
          type: 'SET_PIZZA',
          payload: res.data
        });
      })
      .catch((err) => {
        // tell client of failure
        console.error('axios GET ERROR!', err);
      });
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Router>
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <PizzaList />
      </Router>
    </div>
  );
}

export default App;
