
import {getNewsThunkCreator, setSort } from '../../../Redux/news-reduser';
import { News } from './News';
import { connect } from 'react-redux';
import { getUserInfoThunkCreator } from '../../../Redux/login-reduser';
import { compose } from 'redux';

let maptoStateToProps = (state) => {

  return {    
    allNews: state.newsReduser.newsPage.News,
    currentPage : state.newsReduser.currentPage,
    itemsPerPage: state.newsReduser.itemsPerPage,
    totalCount: state.newsReduser.totalCount,
    sort: state.newsReduser.sort
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    getNews: (page, count,sort) => {
      dispatch(getNewsThunkCreator(page, count, sort));
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