import React from 'react'
import { GrAdd, GrDocumentDownload } from 'react-icons/gr'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import LessonPage from '../LessonPage/LessonPage'

const LessonPlan = (props) => {
    return (
        <LessonPage>
            <Link to={"/lesson/"+props.match.params.id + "/edit"+"/plan"} class="news__link mb">Добавить <GrAdd /></Link>
            <div class="mb">План учебной дисциплины от 20.01.2021</div>
            <Link class="news__file d-ib">Скачать план <GrDocumentDownload class="news__file-img"/> </Link>
               
        </LessonPage>
    )
}

export default compose(
    withRouter
)(LessonPlan)

