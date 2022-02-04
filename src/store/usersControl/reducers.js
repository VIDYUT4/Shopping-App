import {actionTypes as at} from './actionType';
import initialState from './initialState';

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case at.SHOW_USER_LIST: return ({...state, ...action.payload})
        case at.HIDE_USER_LIST: return ({...state, ...action.payload})
        default: return state
    }
}
export default usersReducer;