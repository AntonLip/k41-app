import React from 'react';
import { addPostActionCreator, updateTexttActionCreator } from '../../../Redux/news-reduser';
import MyNews from './MyNews';



export const MyNewsComponenta = (props) => {
  debugger;
  let AddNews = () => {
    props.dispatch(addPostActionCreator());
  }
  let ChangeText = (Text) => {
    let action = updateTexttActionCreator(Text);
    props.dispatch(action);
  }
  return (
      <MyNews changeText={ChangeText} addNews={AddNews} value={props.NewPostText}/>     
  );
}
