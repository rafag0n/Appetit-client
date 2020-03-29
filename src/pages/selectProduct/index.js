import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import TopText from '../../components/topText/'
import ProgressBar from '../../components/progressBar/'
import SearchBar from '../../components/searchBar/'
import ProductList from '../../components/productList/'
import InfoFooterBar from '../../components/infoFooterBar'
import order from '../../mock/api/order'
import './style.scss'


const mapStateToProps = (state) => {
    return {
        selected: state.product
    }
}


class SelectProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            products:[],
            pageIndex:0
        }
    }

    componentDidMount() {
        this.loadProducts()
    }

    loadNextPage = () => {
        this.setState((previousState)=>{
            return {pageIndex: previousState.pageIndex+1}
        },()=>this.loadProducts())
    }

    isFooterBarVisible = () => {
        return (Object.keys(this.props.selected).length > 0)
    }

    calculateTotal = () => {
        let total = 0
        Object.keys(this.props.selected).forEach((key)=>{
            const {price, quantity} = this.props.selected[key]
            total += (price*quantity)
        })
        return total
    }


    loadProducts = async () => {
        let newProducts = await order.loadProducts(this.state.pageIndex, 10)
        this.setState((previousState)=>{
            return {products: Array.concat(previousState.products,newProducts)}
        })
    }

    
    
    
    render(){

        let totalValue = `$ ${this.calculateTotal().toFixed(2)}`
        let footerBarVisible = this.isFooterBarVisible()

        return <div id='select-product'>
            <TopText value='Order Information'/>
            <p>Answer the following questions to register this order:</p>
            <ProgressBar step='1' max='3'/>
            <h6>What are you selling?</h6>
            <SearchBar placeholder='Search for product here'/>
            <ProductList selected={this.props.selected} products={this.state.products}/>
            <InfoFooterBar info={totalValue} visible={footerBarVisible}/>
        </div>
    }
}

export default connect(mapStateToProps)(withRouter(SelectProduct))