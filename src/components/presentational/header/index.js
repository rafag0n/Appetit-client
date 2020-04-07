import React, {Component} from 'react'
import './style.scss'

function Header(props) {

    return (<div className='header'>
        <h3>{props.value}</h3>
        <div className='header__underline'/>
    </div>)


}

export default Header