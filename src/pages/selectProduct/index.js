import React, {Component} from 'react'
import TopText from '../../components/topText/'
import ProgressBar from '../../components/progressBar/'
import SearchBar from '../../components/searchBar/'
import './style.scss'

class SelectProduct extends Component {
    render(){
        return <div id='select-product'>
            <TopText value='Order Information'/>
            <p>Answer the following questions to register this order</p>
            <ProgressBar step='1' max='3'/>
            <h6>What are you selling?</h6>
            <SearchBar placeholder='Search for product here'/>
        </div>
    }
}

export default SelectProduct