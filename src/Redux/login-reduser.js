import { GetUser, RedirectAuth } from "../API/authAPI"

const SET_USER = 'GET_USER'

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
            debugger;
            copyState.loginPage = { ...action.userInfo };
            if (action.userInfo) {
                copyState.loginPage.isLoadingUser = true;
            }
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

export const RedirectCallback = () => {
    RedirectAuth();
}

const setUserInfoAC = (userInfo) => {
    let action = { type: SET_USER, userInfo }
    return action;
}

