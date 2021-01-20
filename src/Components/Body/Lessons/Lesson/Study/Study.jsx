import React from 'react'
import { GrAdd, GrLinkPrevious } from 'react-icons/gr'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import LessonItem from '../LessonItem/LessonItem'
import LessonPage from '../LessonPage/LessonPage'

const Study = (props) => {
    return (
        <LessonPage>
            <Link to={props.match.url + "/edit"} class="news__link mb">Добавить <GrAdd /></Link>
            <LessonItem title="Лекция 1">
                <div>{props.themeName}</div>
                <div>HELLO</div>
            </LessonItem>
            <LessonItem title="Лекция 1">
                <div>{props.themeName}</div>
                <div>HELLO</div>
            </LessonItem>
        </LessonPage>

    )
}

export default compose(
    withRouter
)(Study)
