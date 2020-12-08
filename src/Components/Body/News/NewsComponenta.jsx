
import { addPostActionCreator, getNewsAC, getNewsThunkCreator, updateTexttActionCreator } from '../../../Redux/news-reduser';
import { News } from './News';
import { connect } from 'react-redux';
import { getUserInfoThunkCreator } from '../../../Redux/login-reduser';
import { setAcademicDegreeThunkCreator, setAcademicTitleThunkCreator, setDisciplinesThunkCreator, setGroupsThunkCreator, setLecturalsThunkCreator, setMilitaryRankThunkCreator, setPositionThunkCreator, setUnitThunkCreator } from '../../../Redux/generalInfo-reduser';

let maptoStateToProps = (state) => {

  return {    
    allNews: state.newsReduser.newsPage.News,
    persons: state.generalInfoReduser.info.lecturals
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    getNews: () => {
      dispatch(getNewsThunkCreator());
    },
    addNews: () => {
      dispatch(addPostActionCreator());
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
    }
  }
}

const NewsContainer = connect(maptoStateToProps, mapDispatchToProps)(News);

export default NewsContainer