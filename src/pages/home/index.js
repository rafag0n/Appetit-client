import React, {Component} from 'react'
import TopText from '../../components/topText/'
import Button from '../../components/button/'
import SearchBar from '../../components/searchBar/'
import { withRouter } from 'react-router'
import OrderHoc from '../OrderHoc'
import './style.scss'

class Home extends Component {

    proceedToAddProducts = () => {
        console.log(this.props)
        this.props.history.push('/order/add-products')
    }

    render(){
        return <div id='home'>
            <TopText value='Hi Master!'/>
            <Button text='Create new order' onClick={this.proceedToAddProducts} type='add'/>
            <SearchBar placeholder='Search for customer here'/>
        </div>
    }
}

export default withRouter(OrderHoc(Home))