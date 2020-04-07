import React from 'react'
import './style.scss'
import Sidebar from '../../containers/sidebar'

function Wrapper(InnerComponent) {

    return (props) => {
        
        return <div className='wrapper'>  
                <Sidebar />
                <div className='wrapper__contents'>
                    <InnerComponent {...props}/>
                </div>
            </div>
        
    }
}

export default Wrapper
