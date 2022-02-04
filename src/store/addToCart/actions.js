import {actionTypes as at} from './actionTypes'
const addToCart = (products) => ({
        type: at.PRODUCTS_IN_CART,
        payload: {cartProducts: products}
    })
const openCartMenu = (value) => ({
    type: at.SHOW_CART,
    payload: {showCart: value}
})
const closeCartMenu = (showCart) => ({
    type: at.HIDE_CART,
    payload: {showCart: showCart}
})

const actions = {
    addToCart,
    openCartMenu,
    closeCartMenu
}
export {actions};