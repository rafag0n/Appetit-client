import React, {Component} from 'react'
import {connect} from 'react-redux'
import queryString from 'query-string'
import { withRouter } from 'react-router'

import Header from '../../components/presentational/header/'
import Info from '../../components/presentational/info'
import Selector from '../../components/containers/selector'
import TextField from '../../components/presentational/textField'
import WhiteFooter from '../../components/presentational/whiteFooter'
import Wrapper from '../../components/hoc/wrapper'


import order from '../../mock/api/order'
import actions from '../../redux/actions'
import './style.scss'


const mapDispatchToProps = (dispatch) => ({
    addProduct: (payload) => dispatch({type:actions.product.ADD, payload}),
    deleteProduct: (_id) => dispatch({type:actions.product.REMOVE, _id})
})

const mapStateToProps = (state) => ({
    selectedProducts: state.products
})


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
            quantity: 1,
            deleteEnabled:false
        }
    }

    componentDidMount(){
        let _id = this.getProductId()
        this.loadProductData(_id)
        this.setExistingData(_id)
    }

    setExistingData = (_id) => {
        let selected =  Object.keys(this.props.selectedProducts).find((selectedId)=>selectedId == _id)
        if (selected === undefined) return;
        let {custom, specialRequest,quantity} = this.props.selectedProducts[_id]
        this.setState({custom, specialRequest, quantity, deleteEnabled:true})
    }

    getProductId = () => {
        let query = queryString.parse(this.props.location.search)
        return query.q
    }

    loadProductData = async (_id) => {
        let accessToken = ''
        let product = await order.loadProductData(accessToken, _id)
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
        const {_id, price, imageUrl, name} = this.state.product
        let payload = {
            _id,price,imageUrl, name,
            custom,specialRequest,quantity}
        this.props.addProduct(payload)
        this.proceedToNextPage()
    }

    proceedToNextPage = () => {
        this.props.history.push('/order/add-products')
    }

    onDelete = () => {
        let id = this.getProductId()
        this.props.deleteProduct(id)
        this.proceedToNextPage()
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
        const existingCustoms = this.getExistingCustoms(this.state.product._id)
        if (custom.length == 0) return 
        return <React.Fragment>
            <h6>Options</h6>
            {custom.map((SingleCustom)=>this.renderOneSelector(SingleCustom, existingCustoms))}
        </React.Fragment>
    }


    getExistingCustoms = (_id) => {
        let existingCustoms =  (this.props.selectedProducts[_id] != undefined) ? this.props.selectedProducts[_id].custom : null
        return existingCustoms
    }


    renderOneSelector = ({name, options, multiple, required}, existingCustoms) => {
        let selectorDefaults = (existingCustoms && name in existingCustoms) ? existingCustoms[name] : null
        return <Selector 
        onUpdate={this.handleCustom} required={required} defaultSelected={selectorDefaults}
        options={options} key={name} multiple={multiple} name={name}/>
    }


    render(){
        let {price, name, imageUrl} = this.state.product
        let totalPrice = price * this.state.quantity
        price = `$ ${price.toFixed(2)}`
        totalPrice = `$ ${totalPrice.toFixed(2)}`
        let footerBarVisible = this.isFooterBarVisible()

        return <div id='product-detail'>
            <Header value='Order Details'/>
            <p>You can customize the details of your order here below:</p>
            <Info title={name} imageUrl={imageUrl} subtitle={price}/>
            {this.renderSelectors()}
            <h6>Special Requests</h6>
            <TextField placeholder='Any special request?' value={this.state.specialRequest} onUpdate={this.handleSpecialRequest}/>
            <WhiteFooter onSubmit={this.onSubmit}  deleteEnabled={this.state.deleteEnabled} handleDelete={this.onDelete}
            onQuantityChange={this.handleQuantity} quantity={this.state.quantity} visible={footerBarVisible} price={totalPrice}/>
        </div>
    }
}

const routedProductDetail = withRouter(Wrapper(ProductDetail))
export default connect(mapStateToProps, mapDispatchToProps)(routedProductDetail)