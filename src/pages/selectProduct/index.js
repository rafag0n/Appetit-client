import React, {Component} from 'react'
import TopText from '../../components/topText/'
import ProgressBar from '../../components/progressBar/'
import SearchBar from '../../components/searchBar/'
import ProductList from '../../components/productList/'
import order from '../../mock/api/order'
import './style.scss'


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


    loadProducts = async () => {
        let newProducts = await order.loadProducts(this.state.pageIndex, 10)
        console.log(newProducts)
        this.setState((previousState)=>{
            return {products: Array.concat(previousState.products,newProducts)}
        })
    }
    
    
    render(){
        return <div id='select-product'>
            <TopText value='Order Information'/>
            <p>Answer the following questions to register this order:</p>
            <ProgressBar step='1' max='3'/>
            <h6>What are you selling?</h6>
            <SearchBar placeholder='Search for product here'/>
            <ProductList products={this.state.products} />
        </div>
    }
}

export default SelectProduct