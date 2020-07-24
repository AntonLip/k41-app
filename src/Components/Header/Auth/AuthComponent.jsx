
import { connect } from 'react-redux'
import {getAuthAC} from './../../../Redux/auth-reduser'
import { AuthClass } from './Auth.jsx'

let maptoStateToProps = (state) => {
    return {
        AuthClass: state.AuthUserReduser.Auth_User
    }
}

let mapDispatchToProps = (dispatch) => {
    return {        
        getAuthUser: () => {
           dispatch(getAuthAC());
        }
    }
}



export default connect(maptoStateToProps, mapDispatchToProps)(AuthClass);