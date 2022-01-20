import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
// Redux
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


// pizzaReducer "NOT DONE"
const pizzaReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_PIZZA':
            return action.payload;
    }
    return state;
};  // end of pizza reducer

// orderReducer "NOT DONE"
const orderReducer = (state = [], action) => {
    switch(action.type) {
        case 'DELETE_PIZZA':
            let nextState= state.filter(pizza => pizza.name !== action.payload.name)
            return nextState;
        case 'PIZZA_TO_ORDER':
            return[...state, action.payload];
    }

    return state;
}; // end of orderReducer


// the store
const store = createStore(
    combineReducers({
        pizzaReducer,
        orderReducer
    }),
    applyMiddleware(logger),
); 


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
