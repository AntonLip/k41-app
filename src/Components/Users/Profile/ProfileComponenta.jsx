
import { connect } from 'react-redux'
import { setProfileAC } from '../../../Redux/profile-reduser'
import { ProfileClass } from './ProfileClass'
import { withRouter } from 'react-router-dom';

let maptoStateToProps = (state) => {
    debugger;
    return {
        ProfilePage: state.ProfileReduser.ProfilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {        
        setProfile: (ProfilePage) => {
            dispatch(setProfileAC(ProfilePage));
        }
    }
}

let WithURL = withRouter(ProfileClass);

export default connect(maptoStateToProps, mapDispatchToProps)(WithURL);