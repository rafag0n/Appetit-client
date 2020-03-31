import defaultActions from './actions'

const initialState = {
    isPaid: false,
    date: ''
}

const {payment} = defaultActions

let paymentReducer = (state= initialState, action) =>{

    switch (action.type){
        case payment.STATUS:
            return setPaymentStatus(state,action)
        case payment.DATE:
            return setPaymentDate(state,action)
        default:
            return state
            break;
    }
}

let setPaymentStatus = (state, action) => {
    return Object.assign({}, state, {isPaid: action.bool})
}

let setPaymentDate = (state, action) => {
    return Object.assign({}, state, {date: action.date})
}


export default paymentReducer;



