import react from 'react'
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC, getUsersThunkCreator } from '../../Redux/users-reduser'
import { Users } from './UsersClass'
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

let maptoStateToProps = (state) => {
    return {
        users: state.UserReduser.usersPage.users,
        isAuth: state.LoginReduser.loginPage.isLoadingUser,
        role: state.LoginReduser.loginPage.user.role
       
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        
        getUser: () =>{
            dispatch(getUsersThunkCreator());
        }
    }
}


export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
    //withAuthRedirect
    )(Users);