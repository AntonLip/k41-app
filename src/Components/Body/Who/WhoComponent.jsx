import react from 'react'
import { connect } from 'react-redux'
import { getofficersThunkCreator, getFilteredofficersThunkCreator, deleteUserThunkCreator, getCadetsThunkCreator } from './../../../Redux/whos-reduser'
import { compose } from 'redux';
import { setAcademicDegreeThunkCreator, setAcademicTitleThunkCreator, setMilitaryRankThunkCreator, setPositionThunkCreator } from "./../../../Redux/generalInfo-reduser";
import { WHO } from './Who';
import { setUnitThunkCreator } from '../../../Redux/generalInfo-reduser';

let maptoStateToProps = (state) => {
    return {
        
        officers: state.WHOsReduser.whosPage.officers,
        cadets: state.WHOsReduser.whosPage.cadets,

        isAuth: state.LoginReduser.loginPage.isLoadingUser,
        role: state.LoginReduser.loginPage.user.role,
        token: state.LoginReduser.loginPage.id_token,

        militaryRank: state.generalInfoReduser.info.militaryRank,
        position: state.generalInfoReduser.info.position,
        units: state.generalInfoReduser.info.units,
        academicDegree: state.generalInfoReduser.info.academicDegree,
        academicTitle: state.generalInfoReduser.info.academicTitle
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
        getUnits: () => {
            dispatch(setUnitThunkCreator());
          },
        getUser: () => {
            dispatch(getofficersThunkCreator());
        },
        getCadets: () => {
            dispatch(getCadetsThunkCreator());
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