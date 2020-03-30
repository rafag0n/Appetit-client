import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import TopText from '../../components/topText/'
import ProgressBar from '../../components/progressBar/'
import SearchBar from '../../components/searchBar/'
import CustomerList from '../../components/list/customerList'
import InfoFooterBar from '../../components/infoFooterBar'
import order from '../../mock/api/order'
import store from '../../redux/store'
import actions from '../../redux/actions'
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

    
    render(){
        let totalValue = `${this.calculateTotal()} customers selected`
        let footerBarVisible = this.isFooterBarVisible()
        
        return <div id='select-customers'>
            <TopText value='Order Information'/>
            <p>Answer the following questions to register this order:</p>
            <ProgressBar step='2' max='3'/>
            <h6>Who are you selling to? (You can select more than one)</h6>
            <SearchBar placeholder='Search for customer here'/>
            <CustomerList selected={this.props.selected} items={this.state.customers}/>
            <InfoFooterBar info={totalValue} visible={footerBarVisible}/>
        </div>
    }
}



export default connect(mapStateToProps)(withRouter(SelectCustomers))