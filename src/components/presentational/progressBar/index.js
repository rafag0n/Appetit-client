import React, {Component} from 'react'
import './style.scss'

class ProgressBar extends Component {


    render(){
        const {max, step} = this.props

        return <div className='progress-bar'>
            <p>Step {step} of {max}</p>
            <div className='progress-bar--indicator'>
                <div className='progress-bar--filled' style={{flex: step}}/>
                <div className='progress-bar--empty'style={{flex: max-step}}/>
            </div>
        </div>
    }

}

export default ProgressBar