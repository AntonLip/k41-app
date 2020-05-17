import React from 'react';
import { addPostActionCreator, updateTexttActionCreator } from '../../../Redux/news-reduser';
import MyNews from './MyNews';
import { connect } from 'react-redux';



export const MyNewsComponenta = (props) => {
  let AddNews = () => {
    props.dispatch(addPostActionCreator());
  }

  let ChangeText = (Text) => {
    let action = updateTexttActionCreator(Text);
    props.dispatch(action);
  }


  return (
    <MyNews changeText={ChangeText} addNews={AddNews} value={props.NewPostText} allNews={props.AllNews} />
  );
}

let maptoStateToProps = (state) => {
  
  return {
    value: state.newsReduser.newsPage.newPostText,
    allNews: state.newsReduser.newsPage.News
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addNews: () => {
      dispatch(addPostActionCreator());
    },
    changeText: (Text) => {
      let action = updateTexttActionCreator(Text);
      dispatch(action);
    }
  }
}

export const MyNewsContainer = connect(maptoStateToProps, mapDispatchToProps)(MyNews);
