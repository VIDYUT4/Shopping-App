import {combineReducers} from 'redux';
import loginReducer from 'store/login/reducer';
import usersReducer from 'store/usersControl/reducers';
import addToCartReducer from './store/addToCart/reducer';
import productReducer from './store/products/reducer';

const rootReducers = combineReducers({
    cart: addToCartReducer,
    products: productReducer,
    users: usersReducer,
    login: loginReducer
})
export default rootReducers;