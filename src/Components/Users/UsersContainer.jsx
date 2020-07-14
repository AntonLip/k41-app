import react from 'react'
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC, getUsersThunkCreator } from '../../Redux/users-reduser'
import { Users } from './UsersClass'
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';

let maptoStateToProps = (state) => {
    debugger;
    return {
        users: state.UserReduser.usersPage.users
       
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userid) => {
            dispatch(followAC(userid));
        },
        unfollow: (userid) =>{
            dispatch(unfollowAC(userid));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        getUser: () =>{
            dispatch(getUsersThunkCreator());
        }
    }
}


export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
    withAuthRedirect
    )(Users);