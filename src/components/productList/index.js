import React, {Component} from 'react'
import ListItem from '../listItem'
import './style.scss'

function ProductList(props) {

    let sortByCategory = (products) => {
        let output = {}
        products.forEach((product)=>{
            if (!output[product.category]) output[product.category]=[]
            output[product.category].push(product)
        })
        return output
    }

    let sortByName = (productList) => {
        return productList.sort((a,b)=>{return (a.name > b.name) ? 1 : -1})
    }

    let renderProducts = (products) => {
        products = sortByName(products)
        return products.map((product)=>{
            let secondaryValue = `$ ${product.price.toFixed(2)}`
            return <ListItem key={product._id} onClick={()=>{}}
            item={product.name} imageUrl={product.url} secondaryValue={secondaryValue}/>
        })
    }

    let renderCategory = (products) => {
        let categoryName = products[0].category
        return (
            <div key={categoryName} className='order-list--category'>
                <h6>{categoryName}</h6>
                {renderProducts(products)}
            </div>
        )
    }


    let renderList = () => {
        let productsByCategory = sortByCategory(props.products)
        let renderedList = Object.keys(productsByCategory).map((categoryName)=>{
            let products = productsByCategory[categoryName]
            return renderCategory(products)
        })
        return (
            <div className='product-list'>
                {renderedList}
            </div>
        );  
    }

    return renderList()

}

export default ProductList