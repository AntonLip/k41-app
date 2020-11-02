import React from 'react';
import classes from './MyNew.module.css'

const MyNew = (props) => {
  debugger;
  return (

    <div >
      <div className={classes.card_news}>
        <div className={classes.card_news_header}>
          {props.message.newsHeader}
        </div>
        <div className={classes.card_news_descr}>
          {props.message.newM}
        </div>
        <div className={classes.card_news_footer}>
          <div className={classes.card_news_footer_data}>{props.message.data}</div>
          <div className={classes.card_news_footer_more}>подробнее</div>
        </div>
      </div>

     
      <div className={classes.overlay}></div>
    </div>
  );
}

export default MyNew;