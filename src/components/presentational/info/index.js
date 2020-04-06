import React, {Component} from 'react'
import './style.scss'

function BasicInfo (props) {

    return (
        
        <div className='basic-info'>
            <img className='basic-info--image' src={props.imageUrl}/>
            <div className='basic-info--vertical-wrapper'>
                <h6>{props.title}</h6>
                 <p>{props.subtitle}</p>
            </div>
        </div>
    )
}

export default BasicInfo