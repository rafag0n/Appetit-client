import {createStore, combineReducers} from 'redux'
import productReducer from './product'
import customerReducer from './customer'
import paymentReducer from './payment'

let reducers = {
    products: productReducer,
    customers: customerReducer,
    payment: paymentReducer,
}

let store = createStore(combineReducers(reducers))

export default store;