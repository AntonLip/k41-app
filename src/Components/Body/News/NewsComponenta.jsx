
import { addPostActionCreator, getNewsAC, getNewsThunkCreator, updateTexttActionCreator } from '../../../Redux/news-reduser';
import { News } from './News';
import { connect } from 'react-redux';
import { getUserInfoThunkCreator } from '../../../Redux/login-reduser';

let maptoStateToProps = (state) => {

  return {
    value: state.newsReduser.newsPage.newPostText,
    allNews: state.newsReduser.newsPage.News
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
    getUser: () => {
      dispatch(getUserInfoThunkCreator());
    }
  }
}

const NewsContainer = connect(maptoStateToProps, mapDispatchToProps)(News);

export default NewsContainer