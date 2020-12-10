import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { parsDate } from '../../../help/help'


import MainContentWrapper from '../MainContentWrapper/MainContentWrapper'
import Item from '../Cards/Item'
import Sort from '../Sort/SortItem'
import Filter from '../Sort/Items/Filter/Filter'
import Clear from '../Sort/Items/Clear/Clear'

import Dropdown from '../Sort/Items/Dropdown/Dropdown'
import Input from '../Sort/Items/Input/Input'
import Pagination from '../Pagination/Pagination'


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
    title: "Куренев"
  },
  {
    title: "Кривецкий"
  },
  {
    title: "Шелест"
  },
  {
    title: "Царенков"
  },
  {
    title: "Сергеенко"
  },
  {
    title: "Бобров"
  },
]

export class News extends React.Component {
  
  componentDidMount() {    
    this.props.getNews(this.props.currentPage, this.props.itemsPerPage, this.props.sort);   
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

  sort=(values)=>{
    this.props.setSort(values);
    this.props.getNews(this.props.currentPage, this.props.itemsPerPage, values);
  }

  render()  {
    console.log(this.props)
    return (
    <MainContentWrapper leftSideBar="true">
      <SortForm onSubmit={this.sort} >
          <Dropdown title="От кого новость" link={who} size="6" name="From"/>
          <Dropdown title="Кому новость" link={who} size="6" name="To"/>
          <Date title="С какой даты" name="DateFrom"/>
          <Date title="По какую дату" name="DateTo"/>
          <Input title="Добавить новость" link={who} />
          <Filter />
          <Clear clear={this.sort}/>
      </SortForm>
      <div class="cards">
        <div class="cards__content">
          {this.props.allNews.map(item => {
            return  <Item path="/news/" id={item._id} title={item.Header} from={item.From} to={item.To} date={parsDate(item.Date)}/>
          })}
        </div>
        { 
          (this.props.allNews != 0 )
          ? <Pagination changePage={this.props.setPage} currentPage={this.props.currentPage} itemsPerPage={this.props.itemsPerPage}  totalCount={this.props.totalCount} sizePortion="6"/>
          : "Sorry. News with this props not founded"
        } 
        
      </div>
    </MainContentWrapper>
)}
}

const SortForm = compose(
  connect(state => ({initialValues: state.newsReduser.sort })),
  reduxForm({form: 'sortNews'})
)
(Sort)

