import React from 'react'
import PropTypes from 'prop-types';
import Add from '../../../public/icons/add.svg'

import './style.scss'
 

function Button (props) {

    

    let onClick = (event) => {
        event.preventDefault()
        if (props.enabled && props.onClick) props.onClick(event) 
    }

    let commonButton = () => {
        let disabled= (props.enabled) ? '' : ' --disabled'
        let className = `button-${props.type}${disabled}`
        return (<button className={className} onClick={onClick}>{props.text}</button>)
    }


    let addButton = () => {
        return (<button onClick={onClick} className='button-add'>
            <img src={Add} className='button-add__icon'/>
            <div className='button-add__text'>{props.text}</div>
        </button>) 
    }

    
    let button = (props.type == 'add') ? addButton() : commonButton()
    return button
    
}



Button.defaultProps = {
    type: 'primary',
    enabled: true
}

Button.propTypes = {
    type: PropTypes.oneOf(['primary','secondary','ghost','add'])
}


export default Button

