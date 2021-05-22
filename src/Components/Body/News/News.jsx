import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import { parsDate } from '../../../help/help'


import MainContentWrapper from '../MainContentWrapper/MainContentWrapper'
import Item from '../Cards/Item'
import Sort from '../Sort/SortItem'
import Filter from '../Sort/Items/Filter/Filter'
import Clear from '../Sort/Items/Clear/Clear'
import Date from '../Sort/Items/Date/DateQ'

import Dropdown from '../Sort/Items/Dropdown/Dropdown'
import { Input } from '../Sort/Items/Input/Input'
import Pagination from '../Pagination/Pagination'
import TextArea from '../Sort/Items/Input/items/TextArea/TextArea'
import InputFile from '../Sort/Items/Input/items/File/InputFile'
import InputDropDown from '../Sort/Items/Input/items/InputDropDown/InputDropDown'


export class News extends React.Component {

  componentDidMount() {
    this.props.getNews(this.props.currentPage, this.props.itemsPerPage, this.props.sort);
    this.props.getPersons();
    this.props.getUnits();
    this.props.getUser();
  }

  sort = (values) => {
    this.props.setSort(1, this.props.itemsPerPage, values);
  }

  post = (data) => {
    console.log(data)
    this.props.user == undefined ? data["From"] = "Админ" : data["From"] = this.props.user.family_name;
    if (typeof data["To"] == "undefined"){
      data["To"] = "Всем"
    }
    this.props.postNews(data);
    this.props.getNews(1, this.props.itemsPerPage, { From: "", To: "", DateFrom: "", DateTo: "" });
  }

  render() {
    return (
      <MainContentWrapper leftSideBar="true">
        <SortForm onSubmit={this.sort} >
          {
            !this.props.isAuth ? <InputForm title="Добавить новость" link={this.props.persons} btnText="Добавить" onSubmit={this.post}>
              <TextArea title="Заголовок" size="3" name="Header" />
              <TextArea title="Текст" size="5" name="Text" />
              <InputDropDown title="Кому" link={this.props.persons} name="To" other={[{name: "Всем", value:"Всем"}, {name: "Курсантам", value:"Курсантам"}]}/>
            </InputForm> : <div></div>
          }
          <Dropdown title="От кого новость" link={this.props.persons} size="1" name="From" />
          <Dropdown title="Кому новость" link={this.props.persons} size="1" name="To" />
          <Date title="С какой даты" name="DateFrom" />
          <Date title="По какую дату" name="DateTo" />

          <Filter />
          <Clear clear={this.sort} />
        </SortForm>
        <div class="cards">
          <div class="cards__content">
            {this.props.allNews.map(item => {
              return <Item path="/news/" id={item._id} title={item.Header} from={item.From} to={item.To} date={parsDate(item.Date)} />
            })}
          </div>
          {
            (this.props.allNews != 0)
              ? <Pagination changePage={this.props.setPage} currentPage={this.props.currentPage}  IsNews = {true} itemsPerPage={this.props.itemsPerPage} totalCount={this.props.totalCount} sizePortion="6" />
              : "Sorry. News with this props not founded"
          }
        </div>
      </MainContentWrapper>
    )
  }
}

const SortForm = compose(
  connect(state => ({ initialValues: state.newsReduser.sort })),
  reduxForm({ form: 'sortNews' })
)(Sort)

const InputForm = compose(
  reduxForm({
    form: 'inputNews',
    onSubmitSuccess: (rezult, dispatch) => { dispatch(reset('inputNews')) },
  })
)(Input)

//<InputFile title ="Изображение"/>
//<InputFile title ="Файл"/>