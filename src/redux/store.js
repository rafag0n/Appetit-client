import {createStore, combineReducers} from 'redux'
import productReducer from './product'

let reducers = {
    product: productReducer
}

let store = createStore(combineReducers(reducers))

export default store;