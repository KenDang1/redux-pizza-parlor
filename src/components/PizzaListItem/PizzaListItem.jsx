import React from 'react';
import { useDispatch } from 'react-redux';

function PizzaListItem ({pizza}) {
    // const dispatch = useDispatch();

    // const addPizzaToOrder = () => {

    // };

    return (
        <li>
            {pizza.name} {pizza.image_path} {pizza.price}
        </li>
        
    )

}; // end of function

export default PizzaListItem;