import List from '../list'


let secondaryValueSetter = (item) => {
    return `$ ${item.price.toFixed(2)}`
}

let productDetailLink = (item) =>{
    return `/order/products?q=${item._id}`
}

let onClick = (item, history) => {
    history.push(productDetailLink(item))
}


let ProductList = List(onClick,secondaryValueSetter,true)


export default ProductList