import {useState} from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";

function PizzaForm({ fetchPizza }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [type, setType] = useState('Pickup');

  const checkoutTotal = useSelector(store => store.orderReducer);
  console.log('checkoutTotal is', checkoutTotal);


  const handleSubmit = event => {
    event.preventDefault();

    const order = (checkoutTotal) => {
      let sum = 0;
      for (let i = 0; i < checkoutTotal.length; i ++) {
          let pizza = checkoutTotal[i];
          sum += Number(pizza.price);
      }
      return sum;
    }

    let total = order(checkoutTotal);

    const customer = {
        customer_name: name, street_address: address, city, zip, type, total
    }
    console.log('customer is', customer);
    // TODO - axios request to server to add customer details
    axios.post('/api/order', customer)

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
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <input 
          required 
          placeholder="Street Address" 
          value={address}
          onChange={(event) => setAddress(event.target.value)}
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