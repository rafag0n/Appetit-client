import React, {Component} from 'react'
import './style.scss'

function TopText(props) {

    return (<div className='top-text'>
        <h3>{props.value}</h3>
        <div className='separator-line'/>
    </div>)


}

export default TopText