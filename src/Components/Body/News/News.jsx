import React from 'react'

import { Field, reduxForm } from 'redux-form'

import Item from '../Cards/Item'
import Sort from '../Sort/SortItem'

import Dropdown from '../Sort/Items/Dropdown/Dropdown'
import Date from '../Sort/Items/Date/Date'
import Input from '../Sort/Items/Input/Input'

const who = [
  {
    title: "All"
  }, 
  {
    title: "Шарак"
  }, 
  {
    title: "Белоус"
  },
  {
    title: "Куренев"
  }
]

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
      <button >Show</button>
    </form>);
};

const SetFilterR = reduxForm({
  form: 'FilterNews'
})(SetFilter)

export class News extends React.Component {

  componentDidMount() {
    debugger;
    this.props.getNews();   
    this.props.getUser();
}

  render()  {
    return (
    <div class="cards">
      <Sort>
        <Dropdown title="От кого новость" link={who} size="10"/>
        <Dropdown title="Кому новость" link={who} size="10"/>
        <Date title="С какой даты"/>
        <Date title="По какую дату"/>
        <Input title="Добавить новость" link={who} size="10"/>
      </Sort>
      <div class="cards__content">
        <Item title="Заседание кафедры" from="Липлянин" to="All" date="30.11.2020"/>
        <Item title="Заседание кафедры" from="Липлянин" to="All" date="30.11.2020"/>
        <Item title="Заседание кафедры" from="Липлянин" to="All" date="30.11.2020"/>
        <Item title="Заседание кафедры" from="Липлянин" to="All" date="30.11.2020"/>
      </div>
    </div>
)}
}
