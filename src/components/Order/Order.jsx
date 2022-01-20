import react from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CheckoutTotal from '../CheckoutTotal/CheckoutTotal';

function Order () {
    const dispatch = useDispatch();
    const order = useSelector(store => store.orderReducer)
    const history = useHistory();

    // TODO: Clear the order and navigate back to pizza page
    const handleOrder = () =>{
        dispatch({
            type: 'CLEAR_ORDER'
        })
        history.push('/')
    }



    // Checkout button clicked to clear the list

    return (
        <>
        <h2>Order</h2>
        {/** TODO: Display pizza client want to order */}
        {order.map((pizza, i) =>(
            <li key={i}>{pizza.name}: {pizza.description}: {pizza.price}</li>
        ))}

        <button onClick={handleOrder}>Order</button>

        <CheckoutTotal />
        </>

    )
}; // end of function

export default Order;