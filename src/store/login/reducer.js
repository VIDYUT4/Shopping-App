import initialState from './initialState';
import {actionTypes as at} from './actionTypes';

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case at.OPEN_LOGIN_MODEL: return ({...state, ...action.payload})
        case at.LOGIN_SUCCESS: return ({...state, ...action.payload})
        case at.LOGIN_ERROR: return ({...state, ...action.payload})
        default: return state
    }
}
export default loginReducer;
export {loginReducer};