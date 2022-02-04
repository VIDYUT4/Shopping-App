import {actionTypes as at} from './actionType';


const usersNavShow = (value) => ({
    type: at.SHOW_USER_LIST,
    payload: {showUserMenu:value}
})
const usersNavHide = (value) => ({
    type: at.SHOW_USER_LIST,
    payload: {showUserMenu:value}
})

const actions = {
    usersNavShow,
    usersNavHide
}

export default actions;
export {actions};