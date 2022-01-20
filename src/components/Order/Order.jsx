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

    const onHandleNext = () => {
        {/** TODO: when click on the button it take to the next page so client can inputs their info */}
    }

    // Next button clicked to clear the list
    const onDelete = (pizza) => {
        dispatch({
            type: 'DELETE_PIZZA',
            payload: pizza
        })
    }

    return (
        <>
        <h2>Order</h2>
        <div>
        <h2>Checkout</h2>
        {order.map((pizza, i) => 
         <li key={i}>{pizza.name}: {pizza.description}: {pizza.price}
          <button onClick={event => onDelete(pizza)}>DELETE</button>
        </li>
        )}
        <button onClick={handleOrder}>Order</button>
        </div>
        <CheckoutTotal />
        </>

    )
}; // end of function

export default Order;