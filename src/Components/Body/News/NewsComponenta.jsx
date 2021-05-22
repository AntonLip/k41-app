
import { setNewsThunkCreator, setSortThunkCreator, postNewsThunkCreator } from '../../../Redux/news-reduser';
import { News } from './News';
import { connect } from 'react-redux';
import { getUserInfoThunkCreator } from '../../../Redux/login-reduser';
import { compose } from 'redux';
import { getWindowsStatusThunkCreator,  setAcademicTitleThunkCreator, setDisciplinesThunkCreator, setGroupsThunkCreator, setLecturalsThunkCreator,  setPositionThunkCreator,  setUnitThunkCreator } from '../../../Redux/generalInfo-reduser';

let maptoStateToProps = (state) => {

  return {
    allNews: state.newsReduser.newsPage.News,
    currentPage: state.newsReduser.currentPage,
    itemsPerPage: state.newsReduser.itemsPerPage,
    totalCount: state.newsReduser.totalCount,
    sort: state.newsReduser.sort,
    persons: state.generalInfoReduser.info.lecturals,
    isAuth: state.LoginReduser.loginPage.isLoadingUser,
            role: state.LoginReduser.loginPage.user.role,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    getNews: (page, count, sort) => {
      dispatch(setNewsThunkCreator(page, count, sort));
    },
    getWindowsStatus: () => {
      dispatch(getWindowsStatusThunkCreator());
    },
    getPersons: () => {
      dispatch(setLecturalsThunkCreator());
    },
    getUnits: () => {
      dispatch(setUnitThunkCreator());
    },
    getGroups: () => {
      dispatch(setGroupsThunkCreator());
    },
    getPosition: () => {
      dispatch(setPositionThunkCreator());
    },
    getDisciplines: () => {
      dispatch(setDisciplinesThunkCreator());
    },
    getAcademicTitle: () => {
      dispatch(setAcademicTitleThunkCreator());
    },
    getUser: () => {
      dispatch(getUserInfoThunkCreator());
    },
    setSort: (currentPage, itemsPerPage, sort) => {
      dispatch(setSortThunkCreator(currentPage, itemsPerPage, sort));
    },
    postNews: (data) => {
      dispatch(postNewsThunkCreator(data));
    }
  }
}

export default compose(
  connect(maptoStateToProps, mapDispatchToProps),
)(News)