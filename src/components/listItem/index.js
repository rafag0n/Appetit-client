import React from 'react'
import Check from '../../public/icons/check.svg'
import './style.scss'

function ListItem (props) {

    let renderImage = () => {
        let src = props.selected ? Check : props.imageUrl;
        let className = props.selected ?  'list-item--selected' : 'list-item--image'
        return <img className={className} onClick={onClick} src={src}/>
    }

    let secondaryValue = props.secondaryValue ? <p>{props.secondaryValue}</p> : null
    let onClick = props.onClick ? props.onClick : ()=>{}

    return (
        <div className='list-item'>
            {renderImage()}
            <h6 onClick={onClick}>{props.item}</h6>
            {secondaryValue}
        </div>
    )

}


export default ListItem