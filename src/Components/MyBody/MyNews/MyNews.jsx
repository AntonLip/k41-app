import React from 'react';
import classes from './MyNews.module.css'

const MyNews = () => {

  return (
    <div className={classes.MyNews}>
      <div>My News</div>
      <textarea></textarea>
      <button>Add News</button>
    </div>
  );
}

export default MyNews;