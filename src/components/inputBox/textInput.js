import React, {Component} from 'react'
import InputBox from './index.js'
import './style.scss'
import PropTypes from 'prop-types'

class TextInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            focused: false,
        }
    }

    onFocus = () => {
        this.setState({focused: true})
    }

    onBlur = () => {
        this.setState({focused: false})
    }

    handleChange = (event) => {
        this.props.handleChange(event.target.value)
    }

    render() {
        let type = this.props.type ? this.props.type : 'text'
        return <InputBox label={this.props.name} focused={this.state.focused} value={this.props.value}>
            <input placeholder={this.props.name} value={this.props.value} onFocus={this.onFocus} onBlur={this.onBlur} type={type} name='text' onChange={this.handleChange}/>
        </InputBox>
    }

}


TextInput.propTypes = {
    handleChange: PropTypes.func,
    name: PropTypes.string, //aka label
    value: PropTypes.string,
    type: PropTypes.any
}



export default TextInput