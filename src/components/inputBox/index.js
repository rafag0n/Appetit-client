import React, {Component} from 'react'
import './style.scss'
import PropTypes from 'prop-types'

function InputBox (props){

    
    let borderStylePrefix = 'input-box__border-'
    let state = props.focused ? 'focused' : 'blurred'
    let labelState = (props.value && props.value.length > 0 && !props.focused) ? 'with-text' : state
        
    return (
        <div className='input-box'>
            <div className='input-box-border'>
                <div className={`input-box--label-wrapper-leading ${borderStylePrefix}${state}`}></div>
                <div className={`input-box--label-wrapper--${labelState} ${borderStylePrefix}${state}`}>
                    <label className={`input-box--floating-label-${labelState}`}>{props.label}</label>
                </div>
                <div className={`input-box--label-wrapper-trailing ${borderStylePrefix}${state}`}></div>
            </div>
            <div className='input-box--children-wrapper'>
            {props.children}
            </div>
        </div>     
    )
    


}


InputBox.propTypes = {
    label: PropTypes.string,
    focused: PropTypes.bool,
    value: PropTypes.string,
    children: PropTypes.any,
}
    

export default InputBox

