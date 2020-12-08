import React from 'react'

import { Field, reduxForm } from 'redux-form'

import MainContentWrapper from '../MainContentWrapper/MainContentWrapper'

import Item from '../Cards/Item'
import Sort from '../Sort/SortItem'

import Filter from '../Sort/Items/Filter/Filter'

import Dropdown from '../Sort/Items/Dropdown/Dropdown'
import Input from '../Sort/Items/Input/Input'
import DateQ from '../Sort/Items/Date/DateQ'

const who = [
  {
    name: "Всем"
  }, 
  {
    name: "Курсанты"
  }, 
  {
    name: "Постоянный состав"
  },
  {
    name: "Куренев"
  }
]

export class News extends React.Component {
  componentDidMount() {    
    this.props.getPersons();  
    this.props.getUnits();
    this.props.getUser();
    this.props.getAcademicTitle();
    this.props.getDisciplines();
    this.props.getPosition();
    this.props.getAcademicDegree();
    this.props.getMilRank();
    this.props.getGroups();
}

  render()  {
    return (
    <MainContentWrapper leftSideBar="true">
      <Sort>
          <Dropdown title="От кого новость" link={this.props.persons} size="6"/>
          <Dropdown title="Кому новость" link={who} size="6"/>
          <DateQ title="С какой даты"/>
          <DateQ title="По какую дату"/>
          <Input title="Добавить новость" link={who} />
          <Filter/>
        </Sort>
      <div class="cards">
        <div class="cards__content">
          <Item title="Заседание кафедры" from="Липлянин" to="All" date="30.11.2020"/>
          <Item title="Заседание кафедры" from="Липлянин" to="All" date="30.11.2020"/>
          <Item title="Заседание кафедры" from="Липлянин" to="All" date="30.11.2020"/>
          <Item title="Заседание кафедры" from="Липлянин" to="All" date="30.11.2020"/>
        </div>
      </div>
    </MainContentWrapper>
)}
}
