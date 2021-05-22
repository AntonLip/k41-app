
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getCountDisciplinesThunkCreator, getDisciplineNamesThunkCreator, getDisciplineThunkCreator, getFilteredDisciplinesThunkCreator } from '../../../Redux/disciplines-reduser';
import { Lessons } from './Lessons';
let maptoStateToProps = (state) => {
    return {
        countDisciplines : state.disciplinesReduser.DisciplinesPage.count,
        currentPage: state.newsReduser.currentPage,
        itemsPerPage: state.newsReduser.itemsPerPage,

        nameofDiscoplines: state.disciplinesReduser.DisciplinesPage.nameofDiscoplines,
        

        isAuth: state.LoginReduser.loginPage.isLoadingUser,
        role: state.LoginReduser.loginPage.user.role,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getDisciplinesName: (page, count) => {
            dispatch(getDisciplineNamesThunkCreator(page, count));
        },
        getDiscipine: () => {
            dispatch(getDisciplineThunkCreator());
        },
        getCountDisciplines: () => {
            dispatch(getCountDisciplinesThunkCreator());
        },
        getFilteredNames: (nameOfSpec, year) => {
            dispatch(getFilteredDisciplinesThunkCreator(nameOfSpec, year));
        }
    }
}

export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
)(Lessons)