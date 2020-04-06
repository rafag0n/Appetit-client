import React from 'react'
import './style.scss'


function ChildItem (props) {

    let onClick = () => {
        if (props.onClick) props.onClick()
    }


    return <div onClick={onClick} className='child-item'>
        {props.text}
    </div>

}

export default ChildItem