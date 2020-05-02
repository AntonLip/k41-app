import React from 'react';
import classes from './MyBody.module.css'
import MyNews from './MyNews/MyNews';
import MyNew from './MyNews/MyNew/MyNew';
const MyBody = () => {

  return (
    <div>
      Main Content
      <MyNews />
      <div className={classes.MyBodyClass}>
        <MyNew message='How are you' />
        <MyNew message='Norm' />
      </div>
    </div>
  );
}

export default MyBody;