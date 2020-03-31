import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import TopText from '../../components/topText/'
import ProgressBar from '../../components/progressBar/'
import Selector from '../../components/selector'
import actions from '../../redux/actions'
import DatePicker from '../../components/datePicker'
import './style.scss'


const mapStateToProps = (state) => {
    return {
        isPaid: state.payment.isPaid,
        date: state.payment.date
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPaymentStatus: (bool) => dispatch({type:actions.payment.STATUS, bool}),
        setDate: (date) => dispatch({type:actions.payment.DATE, date}),
    }
}


function PaymentStatus (props){

    let renderDatePicker = () => {
        if (props.isPaid) {
            return <React.Fragment>
                <h6>When was the payment Submitted?</h6>
            </React.Fragment>
        }
    }

    let handleCustom = (name, selected) => {
        let value = selected[0]
        if (value == 'Not paid') value = false;
        else value = true
        props.setPaymentStatus(value)
    }

    let renderSelector = () => {
        let selectorDefaults = (props.isPaid) 
        let options = ['Not paid', 'Already Paid']
        return <Selector 
        onUpdate={handleCustom} required={true} defaultSelected={selectorDefaults}
        options={options} key={name} multiple={false} name={name}/>
    }


    return <div id='payment-status'>
            <TopText value='Order Information'/>
            <p>Answer the following questions to register this order:</p>
            <ProgressBar step='3' max='3'/>
            <h6>What is the payment status?</h6>
            {renderSelector()}
            {renderDatePicker()}
            <DatePicker month={10} year={2019}/>
        </div>
    
}



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PaymentStatus))