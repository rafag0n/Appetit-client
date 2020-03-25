import React, {Component} from 'react'
import TopText from '../../components/topText/'
import Button from '../../components/button/'
import './style.scss'

class Home extends Component {
    render(){
        return <div id='home'>
            <TopText value='Olá Vanusa'/>
            <Button text='Hello' type='add'/>
        </div>
    }
}

export default Home