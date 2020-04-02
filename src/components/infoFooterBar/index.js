import React from 'react'
import FooterBar from '../footerBar'
import Next from '../../public/icons/next.svg'
import './style.scss'

function InfoFooterBar(props) {

    
    let onClick = () => {
        (props.onClick) ? props.onClick() : null
    }
    
    return <div className='info-footer-bar' onClick={onClick}>
        <h6>{(props.info)? `Total: ${props.info}` : null}</h6>
        <h6>Next</h6>
        <img src={Next} className='info-footer-bar--icon'/>
    </div>
}




export default FooterBar(InfoFooterBar)