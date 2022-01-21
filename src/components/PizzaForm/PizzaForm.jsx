import {useState} from 'react';
import axios from 'axios';

function PizzaForm({ fetchPizza }) {
  const [customer_name, setName] = useState('');
  const [street_address, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    // TODO - axios request to server to add customer details
    axios.post('/api/order', { customer_name, street_address, city, zip, type })
      .then(res => {
        console.log('POST /api/order', res.data);
        fetchPizza();
      })
      .catch(err => {
        console.error('POST /api/order failed', err);
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
          value={customer_name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <input 
          required 
          placeholder="Street Address" 
          value={street_address}
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

        <select value={type} onChange={(event) => setType(event.target.value)}>
        <option value="pickup">Pickup</option>
        <option value="delivery">Delivery</option>
        </select> <br />

        <button type="submit">
          NEXT
        </button>
      </form>
    </section>
  );
}

export default PizzaForm;