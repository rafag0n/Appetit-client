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
        case product.CLEAR:
            return initialState;
        default:
            return state
            break;
    }
}


let removeProductFromStore = (state, action) => {
    const _id = action._id
    let newObject = {}
    Object.keys(state).forEach((productId)=>{
        if (productId != _id) {
            newObject[productId] = state[productId]
        }
    })
    return newObject
}

let addProductToStore = (state, action) => {
    const product = action.payload
    return Object.assign({}, state, {[product._id]:product})
}


export default productReducer;



