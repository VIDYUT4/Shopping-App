import actionTypes from './actionTypes'
const showCart = (direction) => ({
    type: actionTypes.SHOW_CARD,
    payload: direction
})
const addToCart = (product) => ({
    type: actionTypes.ADD_TO_CART,
    payload: product
})

const actions = {
    showCart,
    addToCart
}
export default actions;
export {actions};