

import { Login } from './Login';
import { changePasswdAC, changeLoginAC } from '../../Redux/login-reduser';
import { connect } from 'react-redux';



let maptoStateToProps = (state) => {
    return {
        timetable: state.timetableReduser.timetablePage.timetable
    }
}
let mapDispatchToProps = (dispatch) => {
    return {                
        changeLogin:(data)=>{
            dispatch(changeLoginAC(data));
        },
        changePassword:()=>{
            dispatch(changePasswdAC());
        }
    }
}
const LoginContainer = connect(maptoStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;