import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

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

        // set 
      })
      .catch((err) => {
        // tell client of failure
        console.error('axios GET ERROR!', err);
      })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
  
    </div>
  );
}

export default App;
