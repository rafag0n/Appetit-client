import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Add from '../../public/icons/add.svg'

import './style.scss'
 

class Button extends Component {

    constructor(props){
        super(props)
    }

    onClick = (event) => {
        event.preventDefault()
        if (this.props.enabled) this.props.onClick(event) 
    }

    commonButton = () => {
        let enabled = (this.props.enabled) ? '' : 'button-disabled'
        let className = `button-${this.props.type} ${enabled}`
        return (<button className={className} onClick={this.onClick}>{this.props.text}</button>)
    }


    addButton = () => {
        return (<button onClick={this.onClick} className='button-add'>
            <img src={Add} className='button-add--icon'/>
            <div className='button-add--text'>{this.props.text}</div>
        </button>) 
    }

    render(){

        let button = (this.props.type == 'add') ? this.addButton() : this.commonButton()
        return button
    }



}

Button.defaultProps = {
    type: 'primary',
    enabled: true
}

Button.propTypes = {
    type: PropTypes.oneOf(['primary','secondary','ghost','add'])
}


export default Button

