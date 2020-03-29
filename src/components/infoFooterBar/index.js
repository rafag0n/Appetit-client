import React from 'react'
import FooterBar from '../footerBar'
import Next from '../../public/icons/next.svg'
import './style.scss'

function InfoFooterBar(props) {

    
    let handleSubmit = () => {
        (props.onSubmit) ? props.onSubmit() : null
    }
    
    return <div className='info-footer-bar' onClick={handleSubmit}>
        <h6>Total: {props.info}</h6>
        <h6>Next</h6>
        <img src={Next} className='info-footer-bar--icon'/>
    </div>
}




export default FooterBar(InfoFooterBar)