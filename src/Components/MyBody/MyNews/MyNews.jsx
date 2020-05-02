import React from 'react';
import classes from './MyNews.module.css'

const MyNews = (props) => {
  let newPostElement = React.createRef();
let AddCallBack = () =>{
  let textNewPost = newPostElement.current.value;
  props.addNews(textNewPost);
}
  return (
    <div className={classes.MyNews}>
      <div>My News</div>
      <textarea ref={newPostElement}></textarea>
      <button onClick={AddCallBack}>Add News</button>
    </div>
  );
}

export default MyNews;