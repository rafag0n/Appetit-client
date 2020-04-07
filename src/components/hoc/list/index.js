import React from 'react'
import ListItem from '../../presentational/listItem'
import { useHistory } from "react-router-dom";
import './style.scss'
import PropTypes from 'prop-types'


function List(onClick = null, secondaryValueSetter=(()=>{}), needsHistory=false) {
    
    //secondaryValueSetter(item)
    //onClick(item,history)

    return (props) => {
        
        let history = ''
        if (needsHistory) history = useHistory()

        let sortByCategory = (items) => {
            let output = {}
            items.forEach((item)=>{
                if (!output[item.category]) output[item.category]=[]
                output[item.category].push(item)
            })
            return output
        }

        let sortByName = (items) => {
            return items.sort((a,b)=>{return (a.name > b.name) ? 1 : -1})
        }


        let isSelected = (itemId) => {
            return itemId in props.selected
        }

        let renderItems = (items) => {
            items = sortByName(items)
            return items.map((item)=>{
                let secondaryValue = secondaryValueSetter(item)
                let selected = isSelected(item._id)
                return <ListItem  clickEnabled={props.clickEnabled} selected={selected} key={item._id} onClick={()=>onClick(item, history)}
                item={item.name} imageUrl={item.imageUrl} secondaryValue={secondaryValue}/>
            })
        }

        let renderByCategory = (items) => {
            let itemsByCategory = sortByCategory(items)
            return Object.keys(itemsByCategory).map((categoryName)=>{
                let items = itemsByCategory[categoryName]
                return (
                    <div key={categoryName} className='list__category'>
                    <h6>{categoryName}</h6>
                        {renderItems(items)}
                    </div>
                )
            }) 
        }



        let renderList = () => {
                
            if (Object.keys(props.items).length == 0) {
                return <div/>
            }
            
            let renderList = (props.items[0].category == null) ? renderItems : renderByCategory    
            
            
            return (
                <div className='list'>
                    {renderList(props.items)}
                </div>
            );  
        }

        return renderList()
    }

}

List.defaultProps = {
    clickEnabled: true
}


List.propTypes = {
    selected: PropTypes.any,
    items: PropTypes.arrayOf(PropTypes.object),
    clickEnabled: PropTypes.bool,
}


export default List