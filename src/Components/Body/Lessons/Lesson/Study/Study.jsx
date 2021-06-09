import React from 'react'
import { GrAdd, GrLinkPrevious } from 'react-icons/gr'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import LessonItem from '../LessonItem/LessonItem'
import LessonPage from '../LessonPage/LessonPage'

const Study = (props) => {
    debugger
    let allLessons;
     allLessons = props.data.map(
        (u) => 
        {
            return <LessonItem lessonId={u.id} title={u.lessonType + " " + u.currentNumberOflessonsType} deleteLesson={props.deleteLesson}>
                 <div>Тема: {u.themeName}</div>
                 <div>Занятие: {u.name}</div>
            </LessonItem>
        }) 
    return (
        <LessonPage>
            <Link to={props.match.url + "/edit"} class="news__link mb" >Добавить <GrAdd /></Link>
            {allLessons}
        </LessonPage>

    )
}

export default compose(
    withRouter
)(Study)
