import {handleActions} from 'redux-actions'
import inititalState from './inititalState';
import {actionTypes as at} from './actionTypes';
const productReducer = ( state = inititalState, action ) => {
    switch (action.type) {
        case at.SHOW_PRODUCTS: 
            return ({...state, ...action.payload})
        default:
            return state
    }
}
export {productReducer};
export default productReducer;
// export default handleActions({
//     [at.SHOW_PRODUCTS]: (state, {payload}) => ({ ...state.products, ...payload})
// }, inititalState)