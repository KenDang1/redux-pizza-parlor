import react from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Order () {
    const dispatch = useDispatch();
    const order = useSelector(store => store.orderReducer)
    const history = useHistory();

    // TODO: Clear the order and navigate back to pizza page



    // Checkout button clicked to clear the list

    return (
        <>
        {/** TODO: Display pizza client want to order */}
        
        </>

    )
}; // end of function

export default Order;