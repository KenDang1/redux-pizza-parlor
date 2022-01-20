import React from 'react';
import {useSelector} from 'react-redux';

const CheckoutTotal = () => {
    //gain access to global variable
    const checkoutTotal = useSelector(store => store.orderReducer);


    const sum = (checkoutTotal) => {
        let sum = 0;
        for (let i = 0; i < checkoutTotal.length; i ++) {
            let pizza = checkoutTotal[i];
            sum += Number(pizza.price);
            console.log(pizza.price);
            console.log(sum);
        }
        return sum;
    }

    let total = sum(checkoutTotal);

    return(
        <div>
            <h3>Your total is ${total}</h3>
        </div>
    )
}

export default CheckoutTotal;