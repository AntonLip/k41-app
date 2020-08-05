import { GetUser } from "../API/authAPI"

const SET_USER = 'GET_USER'
const IS_AUTH = 'IS_AUTH'

let initState =
{
    loginPage: {
        user: null,
        isLoadingUser: false
    }
}



export const LoginReduser = (state = initState, action) => {
    let copyState = {
        ...state
    }
    switch (action.type) {

        case SET_USER:
            copyState.loginPage = { ...action.loginPage };
            if (action.data) {
                copyState.loginPage.isLoadingUser = true;
            }
            return copyState;
        //return { ...state, users: [...state.users, action.users] }
        case IS_AUTH:
            copyState.loginPage = { ...action.loginPage };
            copyState.loginPage.passwd = action.passwd;
            return copyState;


        default:
            return state;
    }
}
export const getUserInfoThunkCreator = () => {

    return (dispatch) => {
        GetUser().then(data => {
            dispatch(setUserInfoAC(data));
        });
    }
}

const setUserInfoAC = (userInfo) => {
    let action = { type: SET_USER, userInfo }
    return action;
}