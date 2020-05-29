
import { connect } from 'react-redux'
import { followAC, unfollowAC, setUsersAC } from '../../Redux/users-reduser'
import { Users } from './Users'

let maptoStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}



export default connect(maptoStateToProps, mapDispatchToProps)(Users);