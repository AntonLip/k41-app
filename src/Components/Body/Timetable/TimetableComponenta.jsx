
import { setDataAC, getTimetableThunkCreator, getTimetableThunkCreatorPerDay, getFilteredTimetableThunkCreator } from '../../../Redux/timetable-reduser';
import { Timetable } from './TimetableClass';
import { connect } from 'react-redux';
import { setDisciplinesThunkCreator, setGroupsThunkCreator, setLecturalsThunkCreator } from '../../../Redux/generalInfo-reduser';


let maptoStateToProps = (state) => {

    return {
        timetable: state.timetableReduser.timetablePage.timetable,

        isAuth: state.LoginReduser.loginPage.isLoadingUser,
        role: state.LoginReduser.loginPage.user.role,
        position: state.LoginReduser.loginPage.user.position,
        family_name: state.LoginReduser.loginPage.user.family_name,

        groups: state.generalInfoReduser.info.groups,
        lecturals: state.generalInfoReduser.info.lecturals,
        disciplines: state.generalInfoReduser.info.disciplines,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setData: (data) => {
            dispatch(setDataAC(data));
        },
        getTimetablePerData: (forWho, dateTime, isCadets) => {
            dispatch(getTimetableThunkCreator(forWho, dateTime, isCadets));
        },
        getTimetablePerDay: (dateTime) => {
            dispatch(getTimetableThunkCreatorPerDay(dateTime));
        },
        getGroups: () => {
            dispatch(setGroupsThunkCreator());
        },
        getDisciplines: () => {
            dispatch(setDisciplinesThunkCreator());
        },
        getPersons: () => {
            dispatch(setLecturalsThunkCreator());
        },
        getFilteredTimetable: (lectural, discipline, group, startDate, stopDate) => {
            dispatch(getFilteredTimetableThunkCreator(lectural, discipline, group, startDate, stopDate));
        }
    }
}
const TimetibleContainer = connect(maptoStateToProps, mapDispatchToProps)(Timetable);

export default TimetibleContainer;