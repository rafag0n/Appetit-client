import {createStore, combineReducers} from 'redux'
import productReducer from './product'
import customerReducer from './customer'

let reducers = {
    products: productReducer,
    customers: customerReducer,
}

let store = createStore(combineReducers(reducers))

export default store;