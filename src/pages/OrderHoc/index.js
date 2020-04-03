import React from 'react'
import './style.scss'
import Sidebar from '../Sidebar'

function OrderHoc(InnerComponent) {

    return (props) => {
        
        return <div className='order'>  
                <Sidebar />
                <div className='container'>
                    <InnerComponent {...props}/>
                </div>
            </div>
        
    }
}

export default OrderHoc
