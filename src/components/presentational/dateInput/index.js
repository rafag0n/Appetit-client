import React, {Component} from 'react'
import InputBox from '../inputBox'
import './style.scss'
import PropTypes from 'prop-types'
import DatePicker from '../datePicker'
import Calendar from '../../../public/icons/calendar.svg'

class DateInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            focused:false
        }
    }

    onFocus = () => {
        this.setState({focused: true})
    }

    onBlur = () => {
        this.setState({focused: false})
    }

    onChange = (date) => {
        this.props.handleChange(date)
    }

    onSubmit = () => {
        this.setState({focused: false})
    }

    onCancel = () => {
        this.setState({focused: false})
    }

    onClick = () => {
        this.setState((prev)=>({focused:!prev.focused}))
    }

    renderCalendar = () => {
        if (this.state.focused) return <DatePicker 
        onCancel={this.onCancel} selectedDate={this.props.value} onChange={this.onChange} onSubmit={this.onSubmit} />
    }

    

    render() {
        let dateString = this.props.value.format('DD/MM/YYYY')
        return <div className='date-input'>
            <div onClick={this.onClick} className='date-input__contents'>
                <InputBox label={this.props.label} focused={this.state.focused} value={dateString}>
                    <div className='date-input__text'>{dateString}</div>
                </InputBox>
            </div>
            <img onClick={this.onClick} src={Calendar} className='date-input__icon'></img>
            {this.renderCalendar()}
        </div>
    }

}


DateInput.propTypes = {
    handleChange: PropTypes.func,
    label: PropTypes.string, //aka label
    value: PropTypes.any,
}



export default DateInput