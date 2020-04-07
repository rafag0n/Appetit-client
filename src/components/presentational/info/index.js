import React, {Component} from 'react'
import './style.scss'

function BasicInfo (props) {

    return (
        
        <div className='info'>
            <img className='info__image' src={props.imageUrl}/>
            <div className='info__column'>
                <h6>{props.title}</h6>
                 <p>{props.subtitle}</p>
            </div>
        </div>
    )
}

export default BasicInfo