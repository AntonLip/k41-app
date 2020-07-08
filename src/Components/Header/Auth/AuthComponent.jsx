
import { connect } from 'react-redux'
import {getAuthAC} from './../../../Redux/auth-reduser'
import { AuthClass } from './Auth.jsx'

let maptoStateToProps = (state) => {
    debugger;
    return {
        AuthClass: state.AuthUserReduser.Auth_User
    }
}

let mapDispatchToProps = (dispatch) => {
    return {        
        getAuthUser: (Auth_user) => {
            dispatch(getAuthAC(Auth_user));
        }
    }
}



export default connect(maptoStateToProps, mapDispatchToProps)(AuthClass);