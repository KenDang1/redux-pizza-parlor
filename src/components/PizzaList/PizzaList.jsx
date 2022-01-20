import React from 'react';
import {useSelector} from 'react-redux';

const PizzaList = () => {
    const pizzaList = useSelector(store => store.pizzaReducer);

    return(
        <div>
            {pizzaList.map((pizza, i) => (
                <div key={i}>{pizza.name}</div>
            ))}
        </div>
    )
}

export default PizzaList;