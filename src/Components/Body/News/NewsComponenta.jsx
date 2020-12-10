
import {getNewsThunkCreator, setSort } from '../../../Redux/news-reduser';
import { News } from './News';
import { connect } from 'react-redux';
import { getUserInfoThunkCreator } from '../../../Redux/login-reduser';
<<<<<<< HEAD
import { compose } from 'redux';
=======
import { setAcademicDegreeThunkCreator, setAcademicTitleThunkCreator, setDisciplinesThunkCreator, setGroupsThunkCreator, setLecturalsThunkCreator, setMilitaryRankThunkCreator, setPositionThunkCreator, setUnitThunkCreator } from '../../../Redux/generalInfo-reduser';
>>>>>>> 72ab880071cf86099e89eef0491e1ff4cfddabbc

let maptoStateToProps = (state) => {

  return {    
    allNews: state.newsReduser.newsPage.News,
<<<<<<< HEAD
    currentPage : state.newsReduser.currentPage,
    itemsPerPage: state.newsReduser.itemsPerPage,
    totalCount: state.newsReduser.totalCount,
    sort: state.newsReduser.sort
=======
    persons: state.generalInfoReduser.info.lecturals
>>>>>>> 72ab880071cf86099e89eef0491e1ff4cfddabbc
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
    getMilRank: () => {
      dispatch(setMilitaryRankThunkCreator());
    },    
    getAcademicDegree: () => {
      dispatch(setAcademicDegreeThunkCreator());
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
      debugger
      dispatch(setSort(data));
    }
    }
  }

export default compose(
  connect(maptoStateToProps, mapDispatchToProps),
)(News)