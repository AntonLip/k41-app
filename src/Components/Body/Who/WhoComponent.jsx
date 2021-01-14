import react from 'react'
import { connect } from 'react-redux'
import { getofficersThunkCreator, getFilteredofficersThunkCreator, deleteUserThunkCreator, getCadetsThunkCreator, getFilteredCadetsThunkCreator } from './../../../Redux/whos-reduser'
import { compose } from 'redux';
import { setAcademicDegreeThunkCreator, setAcademicTitleThunkCreator, setGroupsThunkCreator, setMilitaryRankThunkCreator, setPositionThunkCreator } from "./../../../Redux/generalInfo-reduser";
import  WHO  from './Who';
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
        groups: state.generalInfoReduser.info.groups,
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
        getGroups: () => {
            dispatch(setGroupsThunkCreator());
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
        getFilteredPerson: (values, IsOfficers) => {
            IsOfficers ? dispatch(getFilteredofficersThunkCreator(values)) :
                      dispatch(getFilteredCadetsThunkCreator(values));
        },       
        deletePerson:(id, IsOfficers)=>{
            IsOfficers ? dispatch(deleteUserThunkCreator(id)):
                         dispatch(deleteUserThunkCreator(id));
        }
    }
}

export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
    //withAuthRedirect
)(WHO);