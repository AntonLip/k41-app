import React from 'react'
import { withRouter, Link, Redirect } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { parsDate } from '../../../help/help'
import { GrLinkPrevious, GrDocumentDownload} from "react-icons/gr";
import MainContentWrapper from '../MainContentWrapper/MainContentWrapper'

import {getSingleNewsThunkCreator} from '../../../Redux/news-reduser'



class SingleNews extends React.Component {
    componentDidMount(){
        this.props.getSingleNews(this.props.match.params.id);
    }
    render (){
        console.log(this.props)
        return(
            <MainContentWrapper>
                <div class="news">
                    <div class="news__wrapper">
                        <Link to="/" class="news__link"><GrLinkPrevious class="news__link-img"/>Назад ко всем новостям</Link>
                            <p class="news__date">Дата и время: {parsDate(this.props.news.Date)}</p>
                            <p class="news__from">От: {this.props.news.From}</p>
                            <p class="news__to">Кому: {this.props.news.To}</p>
                            <p class="news__header">{this.props.news.Header}</p>
                            <p class="news__info">{this.props.news.Text}</p>
                            {
                              this.props.news.Link && this.props.news.Link!=="" 
                              ? <a href={this.props.news.Link} 
                                      class="news__file">
                                        Дополнительный файл для скачивания <GrDocumentDownload class="news__file-img"/>
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
      news: state.newsReduser.currentNews
    }
  }
  
  let mapDispatchToProps = (dispatch) => {
    return {
      getSingleNews: (id) => {
        dispatch(getSingleNewsThunkCreator(id));
      },
    }
  }


export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
    withRouter
)(SingleNews)

