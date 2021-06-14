import React from 'react'
import { FaBrain } from 'react-icons/fa'
import { GrLinkPrevious } from 'react-icons/gr'
import { MdOndemandVideo } from 'react-icons/md'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import MainContentWrapper from '../../../MainContentWrapper/MainContentWrapper'

const LessonPage = (props) => {
    
    return (
        <MainContentWrapper leftSideBar="true">
            <div class="sort cards__sort">
                <Link to={"/lesson/" + props.match.params.id} class="sort__item">
                    <div class="sort__title">Учебные материалы</div>
                    <div class="sort__img"><FaBrain /></div>
                </Link>
                <Link to={"/lesson/" + props.match.params.id + "/video"} class="sort__item">
                    <div class="sort__title">Видео материалы</div>
                    <div class="sort__img"><MdOndemandVideo /></div>
                </Link>
                <Link to={"/lesson/" + props.match.params.id + "/plan"} class="sort__item">
                    <div class="sort__title">О дисциплине</div>
                    <div class="sort__img"></div>
                </Link>
                <Link to={"/lesson/" + props.match.params.id + "/test"} class="sort__item">
                    <div class="sort__title">Тестирование</div>
                    <div class="sort__img"></div>
                </Link>

            </div>
            <div>
                <Link to="/lessons" class="news__link news__link--mr mb"><GrLinkPrevious class="news__link-img" />Назад ко всем дисциплинам</Link>
                {props.children}
            </div>
        </MainContentWrapper>
    )
}

export default compose(
    withRouter
)(LessonPage)
