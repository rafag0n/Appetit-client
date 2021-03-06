import React from 'react'
import {withRouter} from 'react-router'

import Wrapper from '../../components/hoc/wrapper'
import Button from '../../components/presentational/button'

import Chef from '../../public/icons/chef.svg'
import './style.scss'

function OrderSuccess (props) {
    
    let registerNewOrder = () => {
        props.history.push('/order/add-products')
    }

    let goToHome = () => {
        props.history.push('/home')
    }
    
    return <div id='order-success'>
            <img src={Chef} className='order-success__chef'/>
            <h4>Order Successful!</h4>
            <div className='order-success__column'>
                <Button onClick={registerNewOrder} type='primary' text='Register new Order'/>
                <Button onClick={goToHome} type='ghost' text='Go back to Dashboard Home'/>
            </div>
    </div>    
    
}

export default withRouter(Wrapper(OrderSuccess))