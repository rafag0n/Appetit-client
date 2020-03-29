import defaultActions from './actions'


const initialState = {}
const {product} = defaultActions

let productReducer = (state= initialState, action) =>{
    switch (action.type){
        case product.ADD:
            return addProductToStore(state,action)
        case product.REMOVE:
            return removeProductFromStore(state,action)
        case product.MODIFY:
            return addProductToStore(state,action)
        default:
            return state
            break;
    }
}


let removeProductFromStore = (state, action) => {
    const {productId} = action.payload
    let newObject = {}
    Object.keys(state).forEach((product)=>{
        if (product._id != productId) newObject[product._id] = product
    })
    return Object.assign({}, state, newObject)
}

let addProductToStore = (state, action) => {
    const product = action.payload
    return Object.assign({}, state, {[product._id]:product})
}


export default productReducer;



