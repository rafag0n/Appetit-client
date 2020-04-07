import React from 'react'
import { BrowserRouter as Router, 
        Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import SelectProduct from './pages/selectProduct'
import ProductDetail from './pages/productDetail'
import SelectCustomers from './pages/selectCustomers'
import PaymentStatus from './pages/paymentStatus'
import OrderSuccess from './pages/orderSuccess'
import Checkout from './pages/checkout'
import ReactDOM from 'react-dom'
import './public/scss/main.scss'
import {Provider} from 'react-redux'
import store from './redux/store'


function PageRouter (props) {  
    return (
        <Router>
        <Switch>
            <Route exact path="/order/checkout"><Checkout/></Route>
            <Route exact path="/order/add-products"><SelectProduct/></Route>
            <Route exact path="/order/products"><ProductDetail/></Route>
            <Route exact path="/order/add-customers"><SelectCustomers/></Route>
            <Route exact path="/order/payment"><PaymentStatus/></Route>
            <Route exact path="/order/success"><OrderSuccess/></Route>
            <Route exact path="/home"><Home/></Route>
            <Route exact path="/"><Login/></Route>
        </Switch>
        </Router>
    )
}




const wrapper = document.getElementById("container")
wrapper ? ReactDOM.render(<Provider store={store}><PageRouter /></Provider>, wrapper) : false