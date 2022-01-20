import React from 'react';
import { useDispatch } from 'react-redux';

function PizzaListItem ({pizza}) {
    const dispatch = useDispatch();

    const addPizzaToOrder = () => {
        dispatch({
            type: 'PIZZA_TO_ORDER',
            payload: pizza 
        })
    };

    return (
        <ul>
            {pizza.name}
            <br />
            <img src={pizza.image_path} height="50px"  width="50px"/>
            <br />
            {pizza.description}
            <br />
            {pizza.price}
            <br />
            <button onClick={addPizzaToOrder}> Add to Order </button>
        </ul>
        
    )

}; // end of function

export default PizzaListItem;