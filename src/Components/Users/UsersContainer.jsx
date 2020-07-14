
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC, getUsersThunkCreator } from '../../Redux/users-reduser'
import { Users } from './UsersClass'

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



export default connect(maptoStateToProps, mapDispatchToProps)(Users);