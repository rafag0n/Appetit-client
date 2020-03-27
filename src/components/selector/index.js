import React, {Component} from 'react'
import Card from '../card'
import './style.scss'

class Selector extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: []
        }
    }

    handleRadioChange = (value) => {
        this.setState({selected:[value]}, this.handleUpdate)
    }

    handleCheckChange = (value, checked) => {
        this.setState((state)=>{
            if (checked) state.selected.push(value)
            else state.selected = state.selected.filter((element)=>(element!=value))
            return state;
        }, this.handleUpdate)
    }

    handleUpdate = () => {
        this.props.onUpdate(this.props.name, this.state.selected)
    }

    renderRadioOption = (value) => {
        return <RadioOption 
        key={value}
        checkedOption={this.state.selected[0]}
        value={value}
        onChange={this.handleRadioChange}/>
    }

    renderCheckOption = (value) => {
        return <CheckOption
        key={value}
        checkedOptions={this.state.selected}
        value={value}
        onChange={this.handleCheckChange}/>
    }

    renderOptions = () => {
        let renderFunction = (this.props.multiple) ? this.renderCheckOption : this.renderRadioOption
        return this.props.options.map((value)=>{
            return renderFunction(value)
        })
    }

    render() {
        
        return <div className='selector'>
            <p>Choose your desired {this.props.name}</p>
            {this.renderOptions()}
        </div>
    }


}

function RadioOption(props) {

    const {checkedOption, value} = props

    let onChange = (event) => {
        props.onChange(event.target.value, event.target.checked)
    } 
    
    return (
        <div className='radio-option selector-card'>
            <input type='radio' 
            checked={checkedOption==value} 
            value={value} 
            onChange={onChange}/>
            <label htmlFor={value}>{value}</label>
        </div>
    )

}

function CheckOption(props) {


    const {checkedOptions, value} = props

    let onChange = (event) => {
        props.onChange(event.target.value, event.target.checked)
    } 

    let isChecked = () => {
        return (checkedOptions.find(value)!=null)
    }
    
    return (
        <div className='check-option selector-card'>
            <input type='checkbox' 
            defaultChecked={isChecked} 
            value={value} 
            onChange={onChange} />
            <label htmlFor={value}>{value}</label>
        </div>
    )

}


export default Selector