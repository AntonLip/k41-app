import Oidc from 'oidc-client'

const GET_AUTH = 'GET AUTH'

let initState =
{
    Auth_User: {
    }
}

var config = {
    authority: "http://localhost:5001",
    client_id: "SPA.client",
    ClientSecrets : "SecretSPA",
    redirect_uri: "http://localhost:3000",
    response_type: "code",
    scope:"openid profile api1",
    post_logout_redirect_uri : "http://localhost:3000",

}

var mgr = new Oidc.UserManager(config);



export const AuthUserReduser = (state = initState, action) => {
    let copyState = {
        ...state
    }
    copyState.Auth_User = {...state.Auth_User}
    switch (action.type) {
        
        case GET_AUTH:
            debugger;           
            copyState.Auth_User = {...action.user}
            return copyState;
            //return { ...state, users: [...state.users, action.users] }
        default:
            return state;
    }

}


export const getAuthAC = () => {
    debugger;
    var user =  mgr.getUser();
    let action = { type: GET_AUTH, user }
    return action;
}