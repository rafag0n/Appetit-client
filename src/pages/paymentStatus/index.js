import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import TopText from '../../components/topText/'
import ProgressBar from '../../components/progressBar/'
import Selector from '../../components/selector'
import actions from '../../redux/actions'
import DateInput from '../../components/dateInput'
import InfoFooterBar from '../../components/infoFooterBar'
import order from '../../mock/api/order'
import moment from 'moment'
import OrderHoc from '../OrderHoc'

import './style.scss'


const mapStateToProps = (state) => {
    return {
        isPaid: state.payment.isPaid,
        date: state.payment.date,
        products: state.products,
        customers: state.customers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPaymentStatus: (bool) => dispatch({type:actions.payment.STATUS, bool}),
        setDate: (date) => dispatch({type:actions.payment.DATE, date}),
        clearPayment: () => dispatch({type:actions.payment.CLEAR}),
        clearProducts: () => dispatch({type:actions.product.CLEAR}),
        clearCustomers: () => dispatch({type:actions.customer.CLEAR}),
    }
}


function PaymentStatus (props){


    let renderDatePicker = () => {
        let date = (props.date != null) ? props.date : moment()
        if (props.isPaid) {
            return <React.Fragment>
                <h6>When was the payment Submitted?</h6>
                <DateInput label='Payment Date' value={date} handleChange={handleDateChange}/>
            </React.Fragment>
        }
    }

    let handlePaymentStatusChange = (_, selected) => {
        let value = selected[0]
        if (value == 'Not paid') value = false;
        else value = true
        props.setPaymentStatus(value)
    }

    let handleDateChange = (date) => {
        props.setDate(date)
    }

    let renderSelector = () => {
        let selectorDefaults = (props.isPaid) 
        let options = ['Not paid', 'Already Paid']
        return <Selector shouldPrompt={false}
        onUpdate={handlePaymentStatusChange} required={true} defaultSelected={selectorDefaults}
        options={options} key={name} multiple={false} name={name}/>
    }

    let proceedToCheckout = () => {
        props.history.push('/order/checkout')
    }

    let footerBarVisible = props.isPaid != null ? true : false;
    
    return <div id='payment-status'>
            <TopText value='Order Information'/>
            <p>Answer the following questions to register this order:</p>
            <ProgressBar step='3' max='3'/>
            <h6>What is the payment status?</h6>
            {renderSelector()}
            {renderDatePicker()}
            <InfoFooterBar info={''} onClick={proceedToCheckout} visible={footerBarVisible}/>
    </div>
    
}



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OrderHoc(PaymentStatus)))