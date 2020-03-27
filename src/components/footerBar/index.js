import React, {Component} from 'react'
import './style.scss'

function FooterBar(WrappedComponent) {
    
    return class extends Component {
        constructor(props){
            super(props)
            this.state = {
                visible: true
            }
        }

        render(){
            return <div className='footer-bar'>
                <WrappedComponent {...this.props}/>
            </div>
        }
    }

}


export default FooterBar
