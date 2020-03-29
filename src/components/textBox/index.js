import React, {Component} from 'react'
import './style.scss'

function TextBox (props) {
    

    let onChange = (event) => {
        let value = event.target.value
        if (props.onUpdate) props.onUpdate(value)
    }

    return <input type='text' className='text-box' placeholder={props.placeholder} value={props.value}
    onChange={onChange} />
    
}

export default TextBox