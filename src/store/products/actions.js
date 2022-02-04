import axios from 'axios';
import { actionTypes as at } from './actionTypes';
const productsAction = () => (dispatch) => {
    axios.get('https://fakestoreapi.com/products/')
    .then(res => dispatch({
        type: at.SHOW_PRODUCTS,
        payload: {initialProducts: res.data}
    })
  )
}

const actions = {
  productsAction
}

export { actions };
export default actions;