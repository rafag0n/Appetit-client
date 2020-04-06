import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import Header from '../../components/presentational/header/'
import ProgressBar from '../../components/presentational/progressBar/'
import SearchBar from '../../components/presentational/searchBar/'
import CustomerList from '../../components/containers/customerList'
import OrangeFooter from '../../components/presentational/orangeFooter'
import Wrapper from '../../components/hoc/wrapper'

import order from '../../mock/api/order'
import './style.scss'


const mapStateToProps = (state) => {
    return {
        selected: state.customers
    }
}

        


class SelectCustomers extends Component {
    
    constructor(props){
        super(props);
        this.state = {customers:[],
            pageIndex: 0,

        }
    }

    componentDidMount() {
        this.loadCustomers()
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
    }

    loadCustomers = async () => {
        let accessToken = ''
        let newCustomers = await order.loadCustomers(accessToken, this.state.pageIndex, 10)
        this.setState((previousState)=>{
            return {customers: Array.concat(previousState.customers,newCustomers)}
        })
    }
    
    isFooterBarVisible = () => {
        return (Object.keys(this.props.selected).length > 0)
    }

    calculateTotal = () => {
        return Object.keys(this.props.selected).length
    }

    proceedToPayment = () => {
        this.props.history.push('/order/payment')
    }

    
    render(){
        let totalValue = `${this.calculateTotal()} customers selected`
        let footerBarVisible = this.isFooterBarVisible()
        
        return <div id='select-customers'>
            <Header value='Order Information'/>
            <p>Answer the following questions to register this order:</p>
            <ProgressBar step='2' max='3'/>
            <h6>Who are you selling to? (You can select more than one)</h6>
            <SearchBar placeholder='Search for customer here'/>
            <CustomerList selected={this.props.selected} items={this.state.customers}/>        
            <OrangeFooter info={totalValue} onClick={this.proceedToPayment} visible={footerBarVisible}/>
        </div>
    }
}



export default connect(mapStateToProps)(withRouter(Wrapper(SelectCustomers)))