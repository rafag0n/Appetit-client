import React, {Component} from 'react'
import './style.scss'

class TextBox extends Component {
    constructor(props){
        super(props)
        this.state={text:''}
    }

    onChange = (event) => {
        let value = event.target.value
        this.setState({text:value}, ()=>this.handleChange(this.state.text))
    }

    handleChange = (text) => {
        if (this.props.handleChange) this.props.onUpdate(text)
    }

    render(){
        return <input type='text' className='text-box' placeholder={this.props.placeholder} value={this.state.text}
        onChange={this.onChange} />
    }
}

export default TextBox