
import { setDataAC, getTimetableThunkCreator } from '../../../Redux/timetable-reduser';
import {Timetable} from './TimetableClass';
import { connect } from 'react-redux';


let maptoStateToProps = (state) => {
   
    return {
        timetable: state.timetableReduser.timetablePage.timetable
    }
}
let mapDispatchToProps = (dispatch) => {
    return {                
        setData:(data)=>{
            dispatch(setDataAC(data));
        },
        getTimetable:(group, dateTime)=>{
            debugger;
            dispatch(getTimetableThunkCreator(group, dateTime));
        }
    }
}
const TimetibleContainer = connect(maptoStateToProps, mapDispatchToProps)(Timetable);

export default TimetibleContainer;