import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './style.scss'
 

class Button extends Component {

    constructor(props){
        super(props)
    }

    render(){

        let enabled = (this.props.enabled) ? 'enabled' : 'disabled'
        let className = `button-${this.props.type} ${enabled}`

        return (
            <button className={className} onClick={this.props.onClick}>{this.props.text}</button>
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

