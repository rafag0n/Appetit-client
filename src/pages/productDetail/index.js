import React, {Component} from 'react'
import { withRouter } from 'react-router'
import TopText from '../../components/topText/'
import BasicInfo from '../../components/basicInfo'
import Selector from '../../components/selector'
import order from '../../mock/api/order'
import queryString from 'query-string'
import './style.scss'


class ProductDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: {
                price:0,
                name:'',
                imageUrl:'',
                custom:[]
            },
            custom:{}
        }
    }

    componentDidMount(){
        this.loadProductData()
    }

    loadProductData = async () => {
        let query = queryString.parse(this.props.location.search)
        let product = await order.loadProductData(query.q)
        this.setState({product})
        return
    }

    handleCustom = () => {

    }

    renderSelectors = () => {
        console.log(this.state)
        const {custom} = this.state.product
        return custom.map(({name, options, multiple})=>(<Selector onUpdate={this.handleCustom}
            options={options} key={name} multiple={multiple} name={name}/>
        ))
    }

    render(){
        let {price, name, imageUrl} = this.state.product
        price = `$ ${price.toFixed(2)}`


        return <div id='product-detail'>
            <TopText value='Order Details'/>
            <p>You can customize the details of your order here below:</p>
            <BasicInfo title={name} imageUrl={imageUrl} subtitle={price}/>
            <h6>Options</h6>
            {this.renderSelectors()}
        </div>
    }
}

export default withRouter(ProductDetail)