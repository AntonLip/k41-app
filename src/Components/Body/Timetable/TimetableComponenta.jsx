
import { setDataAC, getTimetableThunkCreator, getTimetableThunkCreatorPerDay, getFilteredTimetableThunkCreator } from '../../../Redux/timetable-reduser';
import { Timetable } from './TimetableClass';
import { connect } from 'react-redux';
import { setGroupsThunkCreator, setLecturalsThunkCreator } from '../../../Redux/generalInfo-reduser';
import { getCountDisciplinesThunkCreator, getDisciplineNamesThunkCreator } from '../../../Redux/disciplines-reduser';


let maptoStateToProps = (state) => {

    return {
        timetable: state.timetableReduser.timetablePage.timetable,

        isAuth: state.LoginReduser.loginPage.isLoadingUser,
        role: state.LoginReduser.loginPage.user.role,
        position: state.LoginReduser.loginPage.user.position,
        family_name: state.LoginReduser.loginPage.user.family_name,

        groups: state.generalInfoReduser.info.groups,
        lecturals: state.generalInfoReduser.info.lecturals,

        disciplines: state.disciplinesReduser.DisciplinesPage.nameofDiscoplines,
        countDisciplines: state.disciplinesReduser.DisciplinesPage.count
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setData: (data) => {
            dispatch(setDataAC(data));
        },
        getTimetablePerData: (forWho, dateTime, isCadets) => {
            if(isCadets){
                dispatch(getFilteredTimetableThunkCreator(null, null, forWho, dateTime, dateTime));
            }
            else{
                dispatch(getFilteredTimetableThunkCreator(forWho, null, null, dateTime, dateTime));
            }
        },
        getTimetablePerDay: (dateTime) => {
            dispatch(getFilteredTimetableThunkCreator(null, null, null, dateTime, dateTime));
        },
        getGroups: () => {
            dispatch(setGroupsThunkCreator());
        },
        getDisciplines: (count) => {
            dispatch(getDisciplineNamesThunkCreator(0, count));
        },
        getCountOfDisciplines:() => {
            dispatch(getCountDisciplinesThunkCreator());
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