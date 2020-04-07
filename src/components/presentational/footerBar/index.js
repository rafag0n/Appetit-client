import React, {Component} from 'react'
import './style.scss'

function FooterBar(WrappedComponent) {
    
    return class extends Component {
        render(){
            if (this.props.visible) {
            return <React.Fragment>
                    <div className='footer-bar__spacer'/>
                    <div className='footer-bar__wrapper'>
                        <WrappedComponent {...this.props}/>
                    </div>
                </React.Fragment> }
            else return <div></div>
        }
    }

}

FooterBar.defaultProps = {
    visible: false
}


export default FooterBar
