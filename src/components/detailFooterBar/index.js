import React, {Component} from 'react'
import FooterBar from '../footerBar'
import Minus from '../../public/icons/minus.svg'
import Add from '../../public/icons/add.svg'
import './style.scss'

class DetailFooterBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            quantity: 1
        }
    }

    handleQuantityChange = (value) => {
        if (value == -1 && this.state.quantity == 1) return
        this.setState((state)=>{
            state.quantity+=(value)
            return state
        })
    }

    handleSubmit = () => {
        (this.props.onSubmit) ? this.props.onSubmit() : null
    }

    render(){
        return <div className='detail-footer-bar'>
            <QuantitySelector onChange={this.handleQuantityChange} quantity={this.state.quantity}/>
            <AddWithPriceButton price={this.props.price} onClick={this.handleSubmit}/>
        </div>
    }
}

function QuantitySelector(props){

    return (
        <div className='quantity-selector'>
            <img src={Minus} className='quantity-selector--button' onClick={()=>props.onChange(-1)}/>
            <h6>{props.quantity}</h6>
            <img src={Add} className='quantity-selector--button' onClick={()=>props.onChange(1)}/>
        </div>
    )
}

function AddWithPriceButton(props){

    return (
        <div onClick={props.onClick} className='add-with-price'>
            <h5>ADD PRODUCT</h5>
            <h5>{props.price}</h5>
        </div>
    )
}




export default FooterBar(DetailFooterBar)