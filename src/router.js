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
                <Route exact path="/customer/:id"><CustomerOrders/></Route>
                <Route exact path="/order/add-products"><SelectProduct/></Route>
                <Route exact path="/order/products"><ProductDetail/></Route>
                <Route exact path="/order/customers"><SelectCustomers/></Route>
                <Route exact path="/order/payment"><PaymentStatus/></Route>
                <Route exact path="/order/success"><OrderSuccess/></Route>
                <Route exact path="/home"><Home/></Route>
                <Route exact path="/"><Login/></Route>
                <Route exact path="*"><NotFound404/></Route>
            </Switch>
            </Router>
        )
    }
}

export default PageRouter;