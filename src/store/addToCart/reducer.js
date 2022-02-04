import { actionTypes as at } from './actionTypes';
import inititalState from './inititalState';

const addToCartReducer = (state = inititalState, action) => {
    switch (action.type) {
        case at.PRODUCTS_IN_CART:
            return ({ ...state, ...action.payload });
        case at.SHOW_CART:
            return ({ ...state, ...action.payload });
        case at.HIDE_CART:
            return ({ ...state, ...action.payload });
        default:
            return state;
    }
}
export { addToCartReducer };
export default addToCartReducer;