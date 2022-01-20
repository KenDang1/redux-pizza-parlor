import {useState} from 'react';
import axios from 'axios';

function PizzaForm({ fetchPizza }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    console.log(`Adding pizza`, {name, price});

    // TODO - axios request to server to add book
    axios.post('/pizza', { name, price })
      .then(res => {
        console.log('POST /pizza', res.data);
        fetchPizza();
      })
      .catch(err => {
        console.error('POST /pizz failed', err);
      });
  };

  return (
    <section>
      <h2>Add Pizza</h2>
      <form onSubmit={handleSubmit} className="add-pizza">
        <input 
          required 
          type="text"
          placeholder="Name" 
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input 
          required 
          placeholder="Price" 
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <button type="submit">
          Add Pizza
        </button>
      </form>
    </section>
  );
}

export default PizzaForm;