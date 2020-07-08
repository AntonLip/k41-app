
import { setDataAC } from '../../../Redux/timetable-reduser';
import {Timetable} from './TimetableClass';
import { connect } from 'react-redux';


let maptoStateToProps = (state) => {
    debugger;
    return {
        timetable: state.timetableReduser.timetablePage.timetable
    }
}
let mapDispatchToProps = (dispatch) => {
    return {                
        setData:(data)=>{
            dispatch(setDataAC(data));
        }
    }
}
const TimetibleContainer = connect(maptoStateToProps, mapDispatchToProps)(Timetable);

export default TimetibleContainer;