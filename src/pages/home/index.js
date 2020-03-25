import React, {Component} from 'react'
import TopText from '../../components/topText/'
import Button from '../../components/button/'
import SearchBar from '../../components/searchBar/'
import './style.scss'

class Home extends Component {
    render(){
        return <div id='home'>
            <TopText value='Hi Vanusa!'/>
            <Button text='Create new order' type='add'/>
            <SearchBar placeholder='Search for customer here'/>
        </div>
    }
}

export default Home