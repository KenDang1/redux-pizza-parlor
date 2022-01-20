import react from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Order () {
    const dispatch = useDispatch();
    const order = useSelector(store => store.orderReducer)
    const history = useHistory();


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
        {/** TODO: Display pizza client want to order */}
        <div>
        <h2>Checkout</h2>
        {order.map((pizza, i) => 
        <li key={i}> 
        {pizza.name}
        <button onClick={event => onDelete(pizza)}>DELETE</button>
        </li>
        )}
        <button onClick={onHandleNext}>Next</button>
    </div>
        
        </>

    )
}; // end of function

export default Order;