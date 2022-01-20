import React from 'react';
import {useSelector} from 'react-redux';
import PizzaListItem from '../PizzaListItem/PizzaListItem.jsx'

const PizzaList = () => {
    const pizzaList = useSelector(store => store.pizzaReducer);

    return(
        <div>
            {pizzaList.map((pizza, i) => 
                <PizzaListItem key={i} pizza={pizza}/>
            )}
        </div>
    )
}

export default PizzaList;