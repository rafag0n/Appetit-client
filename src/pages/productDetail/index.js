import React, {Component} from 'react'
import { withRouter } from 'react-router'
import TopText from '../../components/topText/'
import BasicInfo from '../../components/basicInfo'
import Selector from '../../components/selector'
import TextBox from '../../components/textBox'
import DetailFooterBar from '../../components/detailFooterBar'
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

    handleRequest = () => {

    }

    renderSelectors = () => {
        const {custom} = this.state.product
        if (custom.length == 0) return 
        return <React.Fragment>
            <h6>Options</h6>
            {custom.map(({name, options, multiple})=>(<Selector onUpdate={this.handleCustom}
                options={options} key={name} multiple={multiple} name={name}/>
            ))}
        </React.Fragment>
    }

    render(){
        let {price, name, imageUrl} = this.state.product
        price = `$ ${price.toFixed(2)}`


        return <div id='product-detail'>
            <TopText value='Order Details'/>
            <p>You can customize the details of your order here below:</p>
            <BasicInfo title={name} imageUrl={imageUrl} subtitle={price}/>
            {this.renderSelectors()}
            <h6>Special Requests</h6>
            <TextBox placeholder='Any special request?'></TextBox>
            <DetailFooterBar />
        </div>
    }
}

export default withRouter(ProductDetail)