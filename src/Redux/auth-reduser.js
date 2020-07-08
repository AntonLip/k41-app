const GET_AUTH = 'GET AUTH'

let initState =
{
    Auth_User: {
    }
}




export const AuthUserReduser = (state = initState, action) => {
    let copyState = {
        ...state
    }
    copyState.Auth_User = {...state.Auth_User}
    switch (action.type) {
        
        case GET_AUTH:
            debugger;
            copyState.Auth_User = {...action.Auth_User}
            return copyState;
            //return { ...state, users: [...state.users, action.users] }
        default:
            return state;
    }

}


export const getAuthAC = (Auth_User) => {
    let action = { type: GET_AUTH, Auth_User }
    return action;
}