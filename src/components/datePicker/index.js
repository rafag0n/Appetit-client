import React, {Component} from 'react'
import moment from 'moment'
import Button from '../../components/button'
import forth from '../../public/icons/forth.svg'
import back from '../../public/icons/back.svg'
import './style.scss'


let dateSuffix = {
    0: 'th',
    1: 'st',
    2: 'nd',
    3: 'rd',
    4: 'th'
}


class DatePicker extends Component {

    constructor(props){
        super(props);
        this.state={
            displayDate: moment().startOf('month'),
            selectedDate: moment()
        }
    }

    componentDidMount() {
        this.checkForPreviousSelectedDate()
    }

    checkForPreviousSelectedDate = () => {
        if (this.props.selectedDate){
            let {selectedDate} = this.props
            this.setState({selectedDate, displayDate: selectedDate.startOf('month')})
        }
    }

    createDateString = (date) => {
        const {displayDate} = this.state;
        let twoDigitDate = String(date).padStart(2, '0')
        let str = `${displayDate.year()}-${displayDate.format('MM')}-${twoDigitDate}`
        return str
    }

    renderDates = () => {
        let {displayDate} = this.state
        let lastDay = displayDate.daysInMonth();
        let dateNodes = []
        for (let date=1 ;date <= lastDay; date++) {
            dateNodes.push(this.renderOneDate(date))
        }
        return dateNodes;
    }

    renderOneDate = (date) => {
        let dateString = this.createDateString(date)
        let selected = (dateString == this.state.selectedDate.format('YYYY-MM-DD'))
        return <DateButton onClick={this.changeSelectedDate}
        dateString={dateString} selected={selected} date={date}/>
    }


    insertEmptySpaces = (dateNodes) => {
        let {displayDate} = this.state
        let numberSpaces = displayDate.day();
        for (let spaces=0; spaces<numberSpaces; spaces++){
            dateNodes.unshift(<td className='date-picker--date-slot'></td>)
        }   
        return dateNodes;
    }

    handleCancel = () => {
        if (this.props.onCancel) this.props.onCancel();
    }

    handleSubmit = () => {
        if (this.props.onSubmit) this.props.onSubmit(this.state.selectedDate)
    }

    formatCalendar = (dateNodes) => {
        let calendar = []
        let children = []
        dateNodes.forEach((node, pointer)=>{
            children.push(node)
            if (((pointer+1) % 7 == 0  && pointer > 0)| (pointer%7 != 0 && pointer == dateNodes.length-1)){
                calendar.push(<tr>{children}</tr>)
                children = []
            }
        })
        return calendar
    }

    changeMonth = (value) => {
        this.setState(({displayDate})=>{
            if (value > 0) displayDate.add(1, 'months')
            else displayDate.subtract(1, 'month')
            return {displayDate}
        })
    }

    changeSelectedDate = (dateString) => {
        this.setState({selectedDate: moment(dateString)})
    }

    renderMonthSelector = () =>  {
        let {displayDate} = this.state
        let text = `${displayDate.format('MMMM')} of ${displayDate.year()}`
        return <div className='date-picker--month-selector'>
            <img src={back} onClick={()=>this.changeMonth(-1)}/>
            <h6>{text}</h6>
            <img src={forth} onClick={()=>this.changeMonth(1)}/>
        </div>
    }

    renderCalendar = () => {
        let dateNodes = this.renderDates()
        let calendarChildren = this.insertEmptySpaces(dateNodes)
        let calendar = this.formatCalendar(calendarChildren)
        return (<table className='date-picker--calendar'>
            <tbody className='date-picker--calendar-body'>
                {this.renderDaysOfWeek()}
                {calendar}
            </tbody>
        </table>)
    }

    getDateSuffix = (date) => {
        let lastDigit = parseInt(String(date).slice(-1))
        let suffix = dateSuffix[(date > 20) ? lastDigit : Math.min(date, 4)] 
        return suffix
    }

    renderDaysOfWeek = () => {
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let children = days.map((day)=>{
            return <td className='date-picker--day-of-week'>{day}</td>
        })
        return <tr>{children}</tr>
    }


    renderSelectedDate = () => {
        const {selectedDate} = this.state
        let date = selectedDate.date()
        let month = selectedDate.format('MMMM')
        let year = selectedDate.year()
        let suffix = this.getDateSuffix(date)
        
        
        return (<React.Fragment>
            <h6>{year}</h6>
            <h3>{month} {date}{suffix}</h3>
        </React.Fragment>
        )
    }

    render(){
        return (
            <div className='date-picker'>
                {this.renderSelectedDate()}
                {this.renderMonthSelector()}
                {this.renderCalendar()}
                <div className='row'>
                    <Button onClick={this.handleCancel} type='ghost' text='Cancel'/>
                    <Button onClick={this.handleSubmit} type='ghost' text='Confirm'/>
                </div>
            </div>
        )
    }


}



let DateButton = ({selected, date, dateString, onClick}) => {
    
    selected = (selected) ? 'selected': null
    let className = `date-picker--date-slot enabled ${selected}`
    
    return <td  onClick={()=>onClick(dateString)} 
    className={className}>{date}</td>
}


export default DatePicker