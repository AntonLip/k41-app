import React from 'react';
import classes from './MyNews.module.css'
import MyNew from './MyNew/MyNew';
import { Field, reduxForm } from 'redux-form';


const SetFilter = (props) => {
 
  return (
    <form onSubmit={props.handleSubmit}>

      <div>
        <label>от кого</label>
        <div>
          <Field name="formSec" component="select">
            <option value={1}>Начальник кафедры</option>
            <option value={2}>Начальник цикла</option>
            <option value={3}>Преподаватель</option>
          </Field>
        </div>
      </div>
      <div>
        <label>кому</label>
        <div>
          <Field name="academicDegree" component="select">
            <option value={1}>Начальник кафедры</option>
            <option value={2}>Начальник цикла</option>
            <option value={3}>Преподаватель</option>
          </Field>
        </div>
      </div>
      <div>
        <label>с какого </label>
        <div>
         
          <Field component={'input'} type="date" data-date="" data-date-format="DD MMMM YYYY" name={"start"} />
         
        </div>
        <label>по какое</label>
        <div>
          
          <Field component={'input'} type="date" data-date="" data-date-format="DD MMMM YYYY" name={"stop"} />
        
        </div>
      </div>
      <button className={classes.button}>Show</button>
    </form>);
}

const SetFilterR = reduxForm({
  form: 'FilterNews'
})(SetFilter)



const MyNews = (props) => {

  let newPostElement = React.createRef();

  let AllNews = props.allNews.map((n) => { return <MyNew message={n} /> });

  let AddCallBack = () => {
    props.addNews();
  }
  let ChangeCallBack = () => {
    let Text = newPostElement.current.value;
    props.changeText(Text);
  }
  debugger;


  return (
    <div className={classes.gridMain}>
      <div className={classes.gridLeftSide}>
        <SetFilterR/>
      </div>
      <div className={classes.container}>
        <div className={classes.card_many_news} >
          {AllNews}
        </div>
      </div>
    </div>


  );
}

export default MyNews;