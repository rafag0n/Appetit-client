import React from 'react'
import {connect} from 'react-redux';
import {withRouter} from 'react-router'

import Button from '../../components/presentational/button';
import Header from '../../components/presentational/header';
import CustomerList from '../../components/containers/customerList';
import ProductList from '../../components/containers/productList';
import Wrapper from '../../components/hoc/wrapper';

import order from '../../mock/api/order';
import actions from '../../redux/actions';
import './style.scss';


let mapStateToProps = (state) => {
    return {
        payment: state.payment,
        products: state.products,
        customers: state.customers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearPayment: () => dispatch({type:actions.payment.CLEAR}),
        clearProducts: () => dispatch({type:actions.product.CLEAR}),
        clearCustomers: () => dispatch({type:actions.customer.CLEAR}),
    }
}

function Checkout (props) {
    
    let prepareDataForUpload = () => {
        let customers = Object.keys(props.customers).map((customerId)=>customerId)
        let products = Object.keys(props.products).map((id)=>props.products[id])
        let date = (props.isPaid) ? props.date.format('YYYY-MM-DD') : null;
        let payment = {isPaid: props.isPaid, date }
        return {products, customers, payment}
    }


    let pushOrderToDb = async () => {
        try {
            let accessToken = ''
            let payload = prepareDataForUpload()
            let res = await order.submitOrder(accessToken, payload)
            return res
        } catch (err){
            throw err
        }
    }

    let clearReduxData = () => {
        props.clearCustomers();
        props.clearPayment();
        props.clearProducts();
        return
    }


    let finishOrderRegistration = async () => {
        await pushOrderToDb()
        clearReduxData()
        props.history.push('/order/success')
        return;
    }

    
    let products = Object.keys(props.products).map((id)=>{
        let product = props.products[id]
        product['name'] = `${product['quantity']}x ${product['name']}`
        return product
    })

    let getTotalPrice = () => {
        let total = 0
        products.forEach((product)=>total += (product.price * product.quantity))
        return `$ ${total.toFixed(2)}`
    }

    let customers = Object.keys(props.customers).map((id)=>props.customers[id])




    return <div id='checkout'>
        <Header value='Confirm your Order'/>
        <p>You can see the details of your order before confirming:</p>
        <h4>Products</h4>
        <ProductList items={products} clickEnabled={false} selected={[]}/>
        <h4>Customers</h4>
        <CustomerList items={customers} clickEnabled={false} selected={[]}/>
        <div className='checkout__row'>
            <h4>Total Value</h4>
            <h4 className='checkout__total'>{getTotalPrice()}</h4>
        </div>


        <Button type='primary' text='Finish Order' onClick={finishOrderRegistration}/>
    </div>

}



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Wrapper(Checkout)))
