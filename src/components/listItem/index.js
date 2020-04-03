import React, {Component} from 'react'
import Check from '../../public/icons/check.svg'
import './style.scss'

class ListItem extends Component {

    onClick = (item) => {
        return (this.props.clickEnabled && this.props.onClick) ? this.props.onClick(item) : ()=>{}
    }

    renderImageOverlay = () => {
        if (this.props.selected) return <img className='list-item--image-overlay' onClick={this.onClick} src={Check}/>

    }

    
    render() {
        let secondaryValue = this.props.secondaryValue ? <p>{this.props.secondaryValue}</p> : null
        let enabled = this.props.clickEnabled ? 'enabled-list' : null
        
        return (
            <div className={`list-item ${enabled}`}>
                <div className='list-item--image'>
                    {this.renderImageOverlay()}
                    <img className='list-item--image-inner' onClick={this.onClick} src={this.props.imageUrl}/>
                </div>
                <h6 onClick={this.onClick}>{this.props.item}</h6>
                {secondaryValue}
            </div>
        )
    
    }
}


ListItem.defaultProps = {
    clickEnabled: true
}


export default ListItem