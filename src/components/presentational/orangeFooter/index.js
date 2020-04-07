import React from 'react'
import FooterBar from '../footerBar'
import Next from '../../../public/icons/next.svg'
import './style.scss'

function OrangeFooter(props) {

    
    let onClick = () => {
        (props.onClick) ? props.onClick() : null
    }
    
    return <div className='orange-footer' onClick={onClick}>
        <h6>{(props.info)? `Total: ${props.info}` : null}</h6>
        <h6>Next</h6>
        <img src={Next} className='orange-footer__icon'/>
    </div>
}




export default FooterBar(OrangeFooter)