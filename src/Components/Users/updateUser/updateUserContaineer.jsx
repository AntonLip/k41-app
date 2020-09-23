
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserbyIdThunkCreator } from '../../../Redux/profile-reduser.js';
import { updateUserThunkCreator } from "./../../../Redux/users-reduser.js";
import { UpdateUsers } from './UpdateUser.jsx';

let maptoStateToProps = (state) => {   
   
    return {        
        position: state.newUserReduser.newUserPage.position,
        militaryRank: state.newUserReduser.newUserPage.militaryRank,
        academicTitle: state.newUserReduser.newUserPage.academicTitle,
        academicDegree: state.newUserReduser.newUserPage.academicDegree,
        isAuth: state.LoginReduser.loginPage.isLoadingUser,
        userData: state.ProfileReduser.ProfilePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {  
        updateUser:(data)=>{            
            dispatch(updateUserThunkCreator(data));
        },
        getUserbyId: (id) =>{            
            dispatch(getUserbyIdThunkCreator(id));
        }
    }
}
let WithURL = withRouter(UpdateUsers);


const UpdateUserContainer = connect(maptoStateToProps, mapDispatchToProps)(WithURL);

export default UpdateUserContainer;