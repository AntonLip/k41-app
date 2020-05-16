import React from 'react';
import classes from './MyNews.module.css'



const MyNews = (props) => {
  let newPostElement = React.createRef();

  let AddCallBack = () => {
    debugger;
    props.addNews();
  }
  let ChangeCallBack = () => {
    debugger;
    let Text = newPostElement.current.value;
    props.changeText(Text);
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