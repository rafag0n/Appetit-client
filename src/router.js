import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CustomerOrders from './pages/customerOrders'
import SelectProduct from './pages/selectProduct'
import ProductDetail from './pages/productDetail'
import SelectCustomers from './pages/selectCustomers'
import PaymentStatus from './pages/paymentStatus'
import OrderSuccess from './pages/orderSuccess'
import Home from './pages/home'
import Login from './pages/login'
import NotFound404 from './pages/notFound'


class PageRouter extends Component {
    render(){
        return (
            <Router>
            <Switch>
                <Route path="/customer/:id"><CustomerOrders/></Route>
                <Route path="/order/new/product"><SelectProduct/></Route>
                <Route path="/order/new/product/:id/"><ProductDetail/></Route>
                <Route path="/order/new/customers"><SelectCustomers/></Route>
                <Route path="/order/new/payment"><PaymentStatus/></Route>
                <Route path="/order/new/success"><OrderSuccess/></Route>
                <Route path="/home"><Home/></Route>
                <Route path="/"><Login/></Route>
                <Route path="*"><NotFound404/></Route>
            </Switch>
            </Router>
        )
    }
}

export default PageRouter;