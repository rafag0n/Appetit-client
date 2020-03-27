import React from 'react'
import './style.scss'

function Card (props){

    let onClick = (event) => {
        if (props.onClick) props.onClick(event)
    }

    return <div onClick={onClick} className='card'>
        {props.children}
    </div>

}

export default Card