import react from 'react'
import { connect } from 'react-redux'
import { getofficersThunkCreator, getFilteredofficersThunkCreator, deleteUserThunkCreator, getCadetsThunkCreator } from './../../../Redux/whos-reduser'
import { compose } from 'redux';
import { setAcademicDegreeThunkCreator, setAcademicTitleThunkCreator, setMilitaryRankThunkCreator, setPositionThunkCreator } from "./../../../Redux/newUser-reduser";
import { WHO } from './Who';

let maptoStateToProps = (state) => {
    return {
        
        officers: state.WHOsReduser.whosPage.officers,
        cadets: state.WHOsReduser.whosPage.cadets,

        isAuth: state.LoginReduser.loginPage.isLoadingUser,
        role: state.LoginReduser.loginPage.user.role,
        token: state.LoginReduser.loginPage.id_token
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setPosition: () => {
            dispatch(setPositionThunkCreator());
        },
        setMilitaryRank: () => {
            dispatch(setMilitaryRankThunkCreator());
        },
        setAcademicDegree: () => {
            dispatch(setAcademicDegreeThunkCreator());
        },
        setAcademicTittes: () => {
            dispatch(setAcademicTitleThunkCreator());
        },
        getUser: (token) => {
            dispatch(getofficersThunkCreator(token));
        },
        getCadets: (token) => {
            dispatch(getCadetsThunkCreator(token));
        },
        getFilteredUser: (filter) => {
            dispatch(getFilteredofficersThunkCreator(filter));
        },
        deleteUser:(id)=>{
            dispatch(deleteUserThunkCreator(id));
        }
    }
}

export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
    //withAuthRedirect
)(WHO);