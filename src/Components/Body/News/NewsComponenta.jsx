
import { addPostActionCreator, getNewsAC, getNewsThunkCreator, updateTexttActionCreator } from '../../../Redux/news-reduser';
import {News} from './News';
import { connect } from 'react-redux';

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
    changeText: (Text) => {
      dispatch(updateTexttActionCreator(Text));
    }
  }
}

const NewsContainer = connect(maptoStateToProps, mapDispatchToProps)(News);

export default NewsContainer