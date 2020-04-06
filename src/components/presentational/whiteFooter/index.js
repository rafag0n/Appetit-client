import React from 'react'
import FooterBar from '../footerBar'
import Minus from '../../../public/icons/minus.svg'
import Add from '../../../public/icons/add.svg'
import Button from '../button'
import './style.scss'

function DetailFooterBar (props) {
    

    let handleQuantityChange = (value) => {
        if (value == -1 && props.quantity == 1) return
        let quantity = props.quantity+(value)
        props.onQuantityChange(quantity)
    }

    let handleSubmit = () => {
        (props.onSubmit) ? props.onSubmit() : null
    }

    let handleDelete = () => {
        if (props.handleDelete()) props.handleDelete()
    }

    let renderDeleteButton = () => {
        if (props.deleteEnabled) {
            return <Button type='ghost' onClick={handleDelete} text='Delete'></Button>
        }
    }

    
    return <div className='detail-footer-bar'>
        <QuantitySelector onChange={handleQuantityChange} quantity={props.quantity}/>
        {renderDeleteButton()}
        <div className='flex-one'/>
        <AddWithPriceButton price={props.price} onClick={handleSubmit}/>
    </div>
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