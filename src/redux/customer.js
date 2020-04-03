import defaultActions from './actions'

const initialState = {}
const {customer} = defaultActions

let customerReducer = (state= initialState, action) =>{
    switch (action.type){
        case customer.ADD:
            return addCustomerToStore(state,action)
        case customer.REMOVE:
            return removeCustomerFromStore(state,action)
        case customer.CLEAR:
            return initialState;
        default:
            return state
            break;
    }
}


let removeCustomerFromStore = (state, action) => {
    const _id = action._id
    let newObject = {}
    Object.keys(state).forEach((customerId)=>{
        if (customerId != _id) {
            newObject[customerId] = state[customerId]
        }
    })
    return newObject
}

let addCustomerToStore = (state, action) => {
    const customer = action.payload
    return Object.assign({}, state, {[customer._id]:customer})
}


export default customerReducer;



