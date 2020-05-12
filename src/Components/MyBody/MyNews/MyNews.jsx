import React from 'react';
import classes from './MyNews.module.css'
import { addPostActionCreator, updateTexttActionCreator } from '../../../Redux/news-reduser';



const MyNews = (props) => {
  let newPostElement = React.createRef();

let AddCallBack = () =>{
 
  props.dispatch(addPostActionCreator());
}
let ChangeCallBack= ()=>{
  let action = updateTexttActionCreator(newPostElement.current.value);
  props.dispatch(action);
}
  return (
    <div className={classes.MyNews}>
      <div>My News</div>
      <textarea onChange={ChangeCallBack} ref={newPostElement} value={props.NewPostText}></textarea>
      <button onClick={AddCallBack}>Add News</button>
    </div>
  );
}

export default MyNews;