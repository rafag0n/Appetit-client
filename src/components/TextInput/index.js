import React, {Component} from 'react'
import './style.scss'
 
class TextInput extends Component {

    constructor(props){
        super(props)
        this.state={
            focused: false
        }
    }

    onFocus = () => {
        this.setState({focused:true})
    }

    onBlur = () => {
        this.setState({focused:false})
    }

    handleChange = (event) => {
        this.props.handleChange(event.target.value)
    }

    render(){

        let borderStylePrefix = 'text_input__border-'
        let state = this.state.focused ? 'focused' : 'blurred'
        let labelState = (this.props.value.length > 0 && !this.state.focused) ? 'with-text' : state
        let type = this.props.type ? this.props.type : 'text'

        return (
            <div className='text_input'>
                <div className='text_input-border'>
                    <div className={`text_input--label-wrapper-leading ${borderStylePrefix}${state}`}></div>
                    <div className={`text_input--label-wrapper--${labelState} ${borderStylePrefix}${state}`}>
                        <label className={`text_input--floating-label-${labelState}`}>{this.props.name}</label>
                    </div>
                    <div className={`text_input--label-wrapper-trailing ${borderStylePrefix}${state}`}></div>
                </div>
                <input placeholder={this.props.name} value={this.props.value} onFocus={this.onFocus} onBlur={this.onBlur} type={type} name='text' onChange={this.handleChange} className='text_input--input'/>
            </div>   
        )
    }



}


export default TextInput

