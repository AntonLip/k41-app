
import { addPostActionCreator, getNewsAC, getNewsThunkCreator, updateTexttActionCreator } from '../../../Redux/news-reduser';
import {MyNews} from './MyNews';
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

export const MyNewsContainer = connect(maptoStateToProps, mapDispatchToProps)(MyNews);
