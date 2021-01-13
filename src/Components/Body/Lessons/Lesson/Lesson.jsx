import React from 'react'
import { GrLinkPrevious, GrAdd } from 'react-icons/gr'
import { Link, Route } from 'react-router-dom'
import MainContentWrapper from '../../MainContentWrapper/MainContentWrapper'
import {MdOndemandVideo} from "react-icons/md"
import {FaBrain} from "react-icons/fa"
import LessonItem from './LessonItem/LessonItem'
import Study from './Study/Study'

export class Lesson extends React.Component {
    printInfo = (values) => {
        console.log(values)
    }
    componentDidMount() {

    }

    render() {
        console.log(this.props)
        return (
            <MainContentWrapper leftSideBar="true">
                <div class="sort cards__sort">
                    <Link to={this.props.match.url} class="sort__item">
                        <div class="sort__title">Учебные материалы</div>
                        <div class="sort__img"><FaBrain/></div> 
                    </Link>
                    <Link to={this.props.match.url+"/video"} class="sort__item">
                        <div class="sort__title">Видео материалы</div>
                        <div class="sort__img"><MdOndemandVideo/></div> 
                    </Link>
                    <Link to={this.props.match.url+"/else"} class="sort__item">
                        <div class="sort__title">Другое</div>
                        <div class="sort__img"></div> 
                    </Link>
                </div>
                <div>
                    <div class="card__nav">
                        <Link to="/lessons" class="news__link news__link--mr"><GrLinkPrevious class="news__link-img"/>Назад ко всем дисциплинам</Link>
                        <div class="news__link">Добавить <GrAdd/></div>
                    </div>
                    <Route exact path="/lesson/:id" render={()=><Study/>} />
                    <Route path="/lesson/:id/video" render={()=><div>Hello world</div>} />
                    <Route path="/lesson/:id/else" render={()=><div>world</div>} />
                </div>
            </MainContentWrapper>
        )
    }
}



