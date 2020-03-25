import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './style.scss'
 

class Button extends Component {

    constructor(props){
        super(props)
    }

    onClick = (event) => {
        event.preventDefault()
        if (this.props.enabled) this.props.onClick(event) 
    }

    render(){

        let enabled = (this.props.enabled) ? '' : 'button-disabled'
        let className = `button-${this.props.type} ${enabled}`
        
        
        return (
            <button className={className} onClick={this.onClick}>{this.props.text}</button>
        )
    }



}

Button.defaultProps = {
    type: 'primary',
    enabled: true
}

Button.propTypes = {
    type: PropTypes.oneOf(['primary','secondary','ghost'])
}


export default Button

