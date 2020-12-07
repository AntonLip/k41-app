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

export class News extends React.Component {
  state = {

  }

  componentDidMount() {    
    //this.props.getNews();   
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
