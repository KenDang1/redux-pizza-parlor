import {useState} from 'react';
import axios from 'axios';

function PizzaForm({ fetchPizza }) {
  const [name, setName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    console.log(`Adding pizza`, {name, streetAddress, city, zip});

    // TODO - axios request to server to add customer details
    axios.post('/pizza', { name, streetAddress, city, zip })
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
      <h2>Customer Information</h2>
      <form onSubmit={handleSubmit} className="add-pizza">
        <input 
          required 
          type="text"
          placeholder="Name" 
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <input 
          required 
          placeholder="Street Address" 
          value={streetAddress}
          onChange={(event) => setStreetAddress(event.target.value)}
        />
        <br />
        <input 
          required 
          placeholder="City" 
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <br />
        <input 
          required 
          placeholder="Zip" 
          value={zip}
          onChange={(event) => setZip(event.target.value)}
        />
        <br />

        <button type="submit">
          NEXT
        </button>
      </form>
    </section>
  );
}

export default PizzaForm;