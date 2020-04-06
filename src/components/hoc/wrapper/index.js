import React from 'react'
import './style.scss'
import Sidebar from '../../containers/sidebar'

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
