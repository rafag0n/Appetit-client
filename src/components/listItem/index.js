import React from 'react'
import './style.scss'

function ListItem (props) {

    let image = <img className='list-item--image' onClick={onClick} src={props.imageUrl}/>
    let secondaryValue = props.secondaryValue ? <p>{props.secondaryValue}</p> : null
    let onClick = props.onClick ? props.onClick : ()=>{}

    return (
        <div className='list-item'>
            {image}
            <h6 onClick={onClick}>{props.item}</h6>
            {secondaryValue}
        </div>
    )

}


export default ListItem