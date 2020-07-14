
const CHANGE_LOGIN = 'CHANGE_LOGIN'
const CHANGE_PASSWD = 'CHANGE_PASSWD'
const AUTH = 'AUTH'

let initState =
{
    loginPage: {
        login : "",
        passwd : "",
        isAuth : false,
        usersData : {

        }
    }
}



export const LoginReduser = (state = initState, action) => {
    let copyState = {
        ...state
    }
    switch (action.type) {

        case CHANGE_LOGIN:
            copyState.loginPage = { ...action.loginPage };
            copyState.loginPage.login = action.login;
            return copyState;
        //return { ...state, users: [...state.users, action.users] }
        case CHANGE_PASSWD:
            copyState.loginPage = { ...action.loginPage };
            copyState.loginPage.passwd = action.passwd;
            return copyState;
        case AUTH :

        default:
            return state;
    }
}

export const changeLoginAC = (login) => {
    let action = { type: CHANGE_LOGIN, login }
    return action;
}

export const changePasswdAC = (passwd) => {
    let action = { type: CHANGE_PASSWD, passwd }
    return action;
}
export const doAuthAC = () => {
    let action = { type: AUTH }
    return action;
}