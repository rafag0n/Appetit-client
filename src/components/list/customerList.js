import List from '../list'
import store from '../../redux/store'
import actions from '../../redux/actions'
import './style.scss'



let onItemClick = (item) => {
    let state = store.getState()
    if (item._id in state.customers) {
        let _id = item._id
        store.dispatch({type:actions.customer.REMOVE, _id})
    } else {
        store.dispatch({type:actions.customer.ADD, payload: item})
    }
}


export default  List(onItemClick)