
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getDisciplineNamesThunkCreator, getDisciplineThunkCreator } from '../../../Redux/disciplines-reduser';
import { setSpecThunkCreator } from '../../../Redux/generalInfo-reduser';
import { Lessons } from './Lessons';
let maptoStateToProps = (state) => {
    return {
        nameofDiscoplines: state.disciplinesReduser.DisciplinesPage.nameofDiscoplines,
        nameOfSpec: state.generalInfoReduser.info.specializations
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getDisciplinesName: () => {
            dispatch(getDisciplineNamesThunkCreator());
        },
        getDiscipine: () => {
            dispatch(getDisciplineThunkCreator());
        },
        getSpec: () => {
          dispatch(setSpecThunkCreator());
        },
    }
}

export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
)(Lessons)