import React, {Component} from 'react'
import { withRouter } from 'react-router'
import TopText from '../../components/topText/'
import BasicInfo from '../../components/basicInfo'
import order from '../../mock/api/order'
import queryString from 'query-string'
import './style.scss'


class ProductDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            price:0,
            name:'',
            imageUrl:'' 
        }
    }

    componentDidMount(){
        this.loadProductData()
    }

    loadProductData = async () => {
        let query = queryString.parse(this.props.location.search)
        let product = await order.loadProductData(query.q)
        this.setState({...product})
        return
    }

    render(){
        let {price, name, imageUrl} = this.state
        price = `$ ${price.toFixed(2)}`

        return <div id='product-detail'>
            <TopText value='Order Details'/>
            <p>You can customize the details of your order here below:</p>
            <BasicInfo title={name} imageUrl={imageUrl} subtitle={price}/>
            <h6>Options</h6>
        </div>
    }
}

export default withRouter(ProductDetail)