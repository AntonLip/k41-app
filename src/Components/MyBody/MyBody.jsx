import React from 'react';
import classes from './MyBody.module.css'
import MyNew from './MyNews/MyNew/MyNew';
import { MyNewsComponenta } from './MyNews/MyNewsComponenta';
const MyBody = (props) => {
debugger;
  let AllNews = props.News.News.map((n) => {return <MyNew message={n.newM}/>});
  return (
    <div>
      Main Content
      <MyNewsComponenta dispatch={props.dispatch} NewPostText={props.NewPostText}/>     
      <div className={classes.MyBodyClass}>
        {AllNews}
      </div>
    </div>
  );
}

export default MyBody;