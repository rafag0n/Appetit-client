import React, {Component} from 'react'
import './style.scss'

function FooterBar(WrappedComponent) {
    
    return class extends Component {
        render(){
            if (this.props.visible) {
            return <div className='footer-bar'>
                <WrappedComponent {...this.props}/>
            </div> }
            else return <div></div>
        }
    }

}

FooterBar.defaultProps = {
    visible: false
}


export default FooterBar
