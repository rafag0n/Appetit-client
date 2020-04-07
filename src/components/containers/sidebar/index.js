import React from 'react'

import MainItem from '../../presentational/sidebarItems/main'
import ChildItem from '../../presentational/sidebarItems/child'

import Orders from '../../../public/icons/order.svg'
import Customers from '../../../public/icons/customer.svg'
import Logo from '../../../public/icons/logo-wt.svg'
import './style.scss'


function Sidebar (props) {

    return <div className='sidebar'>
        <img src={Logo} className='sidebar__logo'/>
        <MainItem text='Orders' icon={Orders} active={true}/>
        <ChildItem text='On hold'/>
        <ChildItem text='Paid' />
        <MainItem text='Customers' icon={Customers}/>
    </div>

}

export default Sidebar