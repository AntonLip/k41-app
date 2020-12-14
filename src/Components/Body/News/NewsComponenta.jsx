
import {getNewsThunkCreator, setSort } from '../../../Redux/news-reduser';
import { News } from './News';
import { connect } from 'react-redux';
import { getUserInfoThunkCreator } from '../../../Redux/login-reduser';
import { compose } from 'redux';
import { setAcademicDegreeThunkCreator, setAcademicTitleThunkCreator, setDisciplinesThunkCreator, setGroupsThunkCreator, setLecturalsThunkCreator, setMilitaryRankThunkCreator, setPositionThunkCreator, setSpecThunkCreator, setUnitThunkCreator } from '../../../Redux/generalInfo-reduser';

let maptoStateToProps = (state) => {

  return {    
    allNews: state.newsReduser.newsPage.News,
    currentPage : state.newsReduser.currentPage,
    itemsPerPage: state.newsReduser.itemsPerPage,
    totalCount: state.newsReduser.totalCount,
    sort: state.newsReduser.sort,
    persons: state.generalInfoReduser.info.lecturals
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    getNews: (page, count,sort) => {
      dispatch(getNewsThunkCreator(page, count, sort));
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
    setSort: (data) => {
      dispatch(setSort(data));
    }
    }
  }

export default compose(
  connect(maptoStateToProps, mapDispatchToProps),
)(News)