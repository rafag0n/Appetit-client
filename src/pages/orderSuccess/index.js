import React from 'react'
import Button from '../../components/button'
import {withRouter} from 'react-router'
import Chef from '../../public/icons/chef.svg'
import OrderHoc from '../OrderHoc'
import './style.scss'

function OrderSuccess (props) {
    
    
    let registerNewOrder = () => {
        props.history.push('/order/add-products')
    }

    let goToHome = () => {
        props.history.push('/home')
    }
    
    return <div id='order-success'>
            <img src={Chef} className='order-success--chef'/>
            <h4>Order Successful!</h4>
            <div className='row'>
                <Button onClick={registerNewOrder} type='primary' text='Register new Order'/>
                <Button onClick={goToHome} type='ghost' text='Go back to Dashboard Home'/>
            </div>
    </div>    
    
}

export default withRouter(OrderHoc(OrderSuccess))