import React, {Component} from 'react'
import arrowForward from '../../../public/icons/arrowForward.svg'
import search from '../../../public/icons/search.svg'
import './style.scss'


class SearchBar extends Component {

    constructor(props){
        super(props)
        this.state={
            value:''
        }
    }
    
    onChange = (event)=>{
        this.setState({
            value: event.target.value
        })
    }

    onKeyDown = (event)=>{
        if (event.keyCode === 13) {
            this.onSubmit()
        }
    }

    onSubmit = () => {
        console.log('submit')
        if (this.props.onSubmit && this.state.value.length > 0) this.props.onSubmit();
    }

    submitButton = () => {
        if (this.state.value.length >= 1){
            return <img src={arrowForward} onClick={this.onSubmit} className='search-bar--submit-button'/>
        }
    }

    render(){
        return (
            <div className='search-bar'>
                <img src={search} className='search-bar--icon'/>
                <input value={this.state.value} onChange={this.onChange} onKeyDown={this.onKeyDown}  type='text' placeholder={this.props.placeholder}></input>
                {this.submitButton()}
                <div className='underline'/>
            </div>
        )
    }

}


export default SearchBar