import React from 'react'
import './style.scss'
import Logo from '../../public/icons/logo-wt.svg'
import MainItem from '../../components/sidebarItems/main'
import ChildItem from '../../components/sidebarItems/child'
import Orders from '../../public/icons/order.svg'
import Customers from '../../public/icons/customer.svg'

function Sidebar (props) {

    return <div className='sidebar'>
        <img src={Logo} className='logo'/>
        <MainItem text='Orders' icon={Orders} active={true}/>
        <ChildItem text='On hold'/>
        <ChildItem text='Paid' />
        <MainItem text='Customers' icon={Customers}/>
    </div>

}

export default Sidebar