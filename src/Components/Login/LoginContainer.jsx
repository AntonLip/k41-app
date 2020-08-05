import React from 'react'
import { connect } from 'react-redux';
import { LoginSuccess } from './Login';
import { getUserInfoThunkCreator } from '../../Redux/login-reduser';


let maptoStateToProps = (state) => {
    return {
        AuthClass: state.LoginReduser
    }
}

let mapDispatchToProps = (dispatch) => {
    return {        
        getUserInfo: () => {
           dispatch(getUserInfoThunkCreator());
        }
    }
}
const LoginSuccessContainer = connect(maptoStateToProps, mapDispatchToProps)(LoginSuccess);

export default LoginSuccessContainer;