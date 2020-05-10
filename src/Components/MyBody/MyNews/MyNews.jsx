import React from 'react';
import classes from './MyNews.module.css'
import { updateTextPostActionCreator, addPostActionCreator } from '../../../Redux/state';

const MyNews = (props) => {
  let newPostElement = React.createRef();
let AddCallBack = () =>{
  props.dispatch(addPostActionCreator());
}
let updateText=()=>{
  let textNewPost = newPostElement.current.value;
  props.dispatch(updateTextPostActionCreator(textNewPost));
}
  return (
    <div className={classes.MyNews}>
      <div>My News</div>
      <textarea onChange={updateText} ref={newPostElement} defaultValue={props.state.newTextArea}></textarea>
      <button onClick={AddCallBack}>Add News</button>
    </div>
  );
}

export default MyNews;