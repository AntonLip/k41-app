
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getDisciplineNamesThunkCreator, getDisciplineThunkCreator, getFilteredDisciplinesThunkCreator } from '../../../Redux/disciplines-reduser';
import { setSpecThunkCreator } from '../../../Redux/generalInfo-reduser';
import { Lessons } from './Lessons';
let maptoStateToProps = (state) => {
    return {
        nameofDiscoplines: state.disciplinesReduser.DisciplinesPage.nameofDiscoplines,
        nameOfSpec: state.generalInfoReduser.info.specializations,
        role: state.LoginReduser.loginPage.user.role,
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
        getFilteredNames: (nameOfSpec, year) => {
            dispatch(getFilteredDisciplinesThunkCreator(nameOfSpec, year));
        }
    }
}

export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
)(Lessons)