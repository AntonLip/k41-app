import React from 'react'
import { withRouter, Link, Redirect, Route } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { parsDate } from '../../../help/help'
import { GrLinkPrevious, GrDocumentDownload } from "react-icons/gr";
import MainContentWrapper from '../MainContentWrapper/MainContentWrapper'

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { deleteNewsThunkCreator, setNewsThunkCreator, setCurrentNewsThunkCreator, putNewsThunkCreator, cleanCurrentNewsThunkCreator } from '../../../Redux/news-reduser'
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Field, initialize, reduxForm, reset } from 'redux-form'
import { setLecturalsThunkCreator } from '../../../Redux/generalInfo-reduser'

class SingleNews extends React.Component {
  componentDidMount() {
    this.props.getSingleNews(this.props.match.params.id);
    //this.props.getPersons();
  }

  updateNews = () => {
    this.props.updateNews(this.props.currentPage, this.props.itemsPerPage, this.props.sort);
  }

  editNews = (values) => {
    this.props.putNews(this.props.match.params.id, values)
    this.props.history.push("/news/" + this.props.match.params.id)
  }

  delete = () => {
    confirmAlert({
      title: 'Подтверждение удаления',
      message: 'Вы действительно хотите удалить эту новость?',
      buttons: [
        {
          label: 'Да',
          onClick: () => { this.props.deleteNews(this.props.match.params.id, "True"); this.updateNews(); this.props.history.push("/") }
        },
        {
          label: 'Нет',
          onClick: () => null
        }
      ]
    });
  }

  back = () => {
    this.props.clearCurrentNews()
    this.props.history.goBack()
  }

  render() {
    return (
      <MainContentWrapper>
        <div class="news">
          <div class="news__wrapper">
            <div class="d-f">
              <Link class="news__link d-f mr" onClick={this.back}><GrLinkPrevious class="news__link-img" />Назад ко всем новостям</Link>
              {
                this.props.news.From == "ВА РБ" ? <div></div> :
                  <>
                    <Link to={this.props.match.url + "/edit"} class="news__link mr" onClick={this.startEditForm}>
                      Редактировать<FiEdit class="news__link-img news__link-img--ml" />
                    </Link>
                    <Link class="news__link" onClick={this.delete}>
                      Удалить <AiOutlineDelete class="news__link-img news__link-img--ml" />
                    </Link>
                  </>
              }




            </div>
            <p class="news__date">Дата и время: {parsDate(this.props.news.Date)}</p>
            <p class="news__from">От: {this.props.news.From}</p>
            <p class="news__to">Кому: {this.props.news.To}</p>
            <p class="news__header">{this.props.news.Header}</p>
            <p class="news__info">{this.props.news.Text}</p>
            {
              this.props.news.Link && this.props.news.Link !== ""
                ? <a href={this.props.news.Link}
                  class="news__file">
                  Дополнительный файл для скачивания <GrDocumentDownload class="news__file-img" />
                </a>
                : null
            }
          </div>
        </div>
      </MainContentWrapper>
    )
  }
}

let maptoStateToProps = (state) => {
  return {
    news: state.newsReduser.currentNews,
    currentPage: state.newsReduser.currentPage,
    itemsPerPage: state.newsReduser.itemsPerPage,
    sort: state.newsReduser.sort,
    persons: state.generalInfoReduser.info.lecturals,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    getSingleNews: (id) => {
      dispatch(setCurrentNewsThunkCreator(id));
    },
    deleteNews: (id, isDelete) => {
      dispatch(deleteNewsThunkCreator(id, isDelete));
    },
    updateNews: (page, count, sort) => {
      dispatch(setNewsThunkCreator(page, count, sort));
    },
    getPersons: () => {
      dispatch(setLecturalsThunkCreator());
    },
    initForm: (data) => {
      dispatch(initialize('editNews', data))
    },
    putNews: (id, data) => {
      dispatch(putNewsThunkCreator(id, data))
    },
    clearCurrentNews: () => {
      dispatch(cleanCurrentNewsThunkCreator())
    }
  }
}


export default compose(
  connect(maptoStateToProps, mapDispatchToProps),
  withRouter
)(SingleNews)

