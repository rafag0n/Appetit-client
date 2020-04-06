import React from 'react'
import { withRouter } from 'react-router'
import './style.scss'

import Header from '../../components/presentational/header'
import Button from '../../components/presentational/button/'
import SearchBar from '../../components/presentational/searchBar/'
import Wrapper from '../../components/hoc/wrapper'

function Home (props) {

    let proceedToAddProducts = () => {
        props.history.push('/order/add-products')
    }

    
    return <div id='home'>
            <Header value='Hi Master!'/>
            <Button text='Create new order' onClick={proceedToAddProducts} type='add'/>
            <SearchBar placeholder='Search for customer here'/>
        </div>
    
}

export default withRouter(Wrapper(Home))