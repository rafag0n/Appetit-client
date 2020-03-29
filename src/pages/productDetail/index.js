import React, {Component} from 'react'
import {connect} from 'react-redux'
import actions from '../../redux/actions'
import { withRouter } from 'react-router'
import TopText from '../../components/topText/'
import BasicInfo from '../../components/basicInfo'
import Selector from '../../components/selector'
import TextBox from '../../components/textBox'
import DetailFooterBar from '../../components/detailFooterBar'
import order from '../../mock/api/order'
import queryString from 'query-string'
import './style.scss'


const mapDispatchToProps = (dispatch) => ({
    addProduct: (payload) => dispatch({type:actions.product.ADD, payload})
})

const mapStateToProps = (state) => ({})


class ProductDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            product: {
                _id: '',
                price:0,
                name:'',
                imageUrl:'',
                custom:[]
            },
            custom:{},
            specialRequest:'',
            quantity: 1
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

    isFooterBarVisible = () => {
        if (Object.keys(this.state.product.custom).length == 0) {
            return true
        } else {
            return (this.areRequiredFieldsFilled())
        }
    }

    areRequiredFieldsFilled = () => {
        let filled = true;
        let keys = this.state.product.custom.map((c)=>c.name)
        for (let i = 0; i < keys.length; i++){
            let key = keys[i];
            let {required} = this.state.product.custom.find((o)=>o.name==key)
            if (!required) continue
            if (required && !(key in this.state.custom)) filled = false;
        }
        return filled
    }

    onSubmit = () => {
        const {custom, specialRequest, quantity} = this.state
        let payload = {
            _id: this.state.product._id, price: this.state.product.price,
            custom,specialRequest,quantity}
        this.props.addProduct(payload)
        this.props.history.push('/order/add-products')
    }

    handleCustom = (name, value) => {
        this.setState((state)=>{
            state.custom[name]=value
            return state}
        )
    }

    handleSpecialRequest = (value) => {
        this.setState({specialRequest:value})
    }

    handleQuantity = (quantity) => {
        this.setState({quantity})
    }

    renderSelectors = () => {
        const {custom} = this.state.product
        if (custom.length == 0) return 
        return <React.Fragment>
            <h6>Options</h6>
            {custom.map(({name, options, multiple, required})=>(<Selector 
                onUpdate={this.handleCustom} required={required}
                options={options} key={name} multiple={multiple} name={name}/>
            ))}
        </React.Fragment>
    }

    render(){
        let {price, name, imageUrl} = this.state.product
        let totalPrice = price * this.state.quantity
        price = `$ ${price.toFixed(2)}`
        totalPrice = `$ ${totalPrice.toFixed(2)}`
        let footerBarVisible = this.isFooterBarVisible()


        return <div id='product-detail'>
            <TopText value='Order Details'/>
            <p>You can customize the details of your order here below:</p>
            <BasicInfo title={name} imageUrl={imageUrl} subtitle={price}/>
            {this.renderSelectors()}
            <h6>Special Requests</h6>
            <TextBox placeholder='Any special request?' onUpdate={this.handleSpecialRequest}></TextBox>
            <DetailFooterBar onSubmit={this.onSubmit} onQuantityChange={this.handleQuantity} quantity={this.state.quantity} visible={footerBarVisible} price={totalPrice}/>
        </div>
    }
}

const routedProductDetail = withRouter(ProductDetail)
export default connect(mapStateToProps, mapDispatchToProps)(routedProductDetail)