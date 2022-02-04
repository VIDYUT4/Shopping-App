import axios from 'axios';
import {actionTypes as at} from './actionTypes';

const showLoginModel = (value) => ({
    type: at.OPEN_LOGIN_MODEL,
    payload: {showLoginModel: value}
})

const loginAuthentication = (data) => (dispatch) => {
    console.log(data)
    axios.post('https://fakestoreapi.com/auth/login', data).then(
        res => {
            localStorage.setItem('token', res.data.token);
            return dispatch({
                type: at.LOGIN_SUCCESS,
                payload: {token: res.token}
            })
    }).catch(err => {
        console.log(err.response.data)
        return dispatch({
        type: at.LOGIN_ERROR,
        payload: {loginErrorMessage: err.response.data}
    })})
}

const actions = {
    showLoginModel,
    loginAuthentication
}
export {actions};
export default actions;