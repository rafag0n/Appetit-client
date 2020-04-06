import React from 'react'
import './style.scss'


function MainItem (props) {

    let onClick = () => {
        if (props.onClick) props.onClick()
    }

    let active = (props.active) ? 'active' : null

    return <div onClick={onClick} className={`main-item ${active}`}>
        <img src={props.icon} className='main-icon' />
        <h6>{props.text}</h6>
    </div>

}

export default MainItem