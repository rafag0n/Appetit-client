import React, {Component} from 'react'
import ListItem from '../listItem'
import { useHistory } from "react-router-dom";
import './style.scss'


function List(onClick, secondaryValueSetter=(()=>{}), needsHistory=false) {
    
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
                return <ListItem selected={selected} key={item._id} onClick={()=>onClick(item, history)}
                item={item.name} imageUrl={item.imageUrl} secondaryValue={secondaryValue}/>
            })
        }

        let renderByCategory = (items) => {
            let itemsByCategory = sortByCategory(items)
            return Object.keys(itemsByCategory).map((categoryName)=>{
                let items = itemsByCategory[categoryName]
                return (
                    <div key={categoryName} className='order-list--category'>
                    <h6>{categoryName}</h6>
                        {renderItems(items)}
                    </div>
                )
            }) 
        }



        let renderList = () => {
            if (props.items.length == 0) {
                return <div/>
            }

            let renderList = (props.items[0].category == null) ? renderItems : renderByCategory    
            return (
                <div className='product-list'>
                    {renderList(props.items)}
                </div>
            );  
        }

        return renderList()
    }

}



export default List