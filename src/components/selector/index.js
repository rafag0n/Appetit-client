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
    
    componentDidMount(){
        if (this.props.defaultSelected != null) this.setState({selected: this.props.defaultSelected});
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
            {(this.props.required)? <div className='selector-required'>Required</div>:null}
            {this.renderOptions()}
        </div>
    }

}


Selector.defaultProps = {
    required: false
}

function RadioOption(props) {

    const {checkedOption, value} = props

    let onWrapperClicked = () => {
        let checked = (checkedOption==value)
        props.onChange(value, !checked)
    }

    
    return (
        <div onClick={onWrapperClicked} className='radio-option selector-card'>
            <input type='radio' 
            checked={checkedOption==value} 
            value={value} 
            onChange={()=>{}}/>
            <label htmlFor={value}>{value}</label>
        </div>
    )

}

function CheckOption(props) {


    const {checkedOptions, value} = props


    let onWrapperClicked = () => {
        let checked = isChecked()
        props.onChange(value, !checked)
    }

    let isChecked = () => {
        return (checkedOptions.find(selected=>selected==value)!=null)
    }
    
    let checked=isChecked()
        
    return (
        <div onClick={onWrapperClicked} className='check-option selector-card'>
            <input type='checkbox' 
            checked={checked} 
            value={value} 
            onChange={()=>{}} />
            <label htmlFor={value}>{value}</label>
        </div>
    )

}


export default Selector