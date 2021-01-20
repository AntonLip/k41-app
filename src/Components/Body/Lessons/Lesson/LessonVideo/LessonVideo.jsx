import React from 'react'
import { GrAdd } from 'react-icons/gr'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import LessonPage from '../LessonPage/LessonPage'
import Item from '../../../Cards/Item'

const LessonVideo = (props) => {
    console.log(props)
    return (
        <LessonPage>
            <Link to={"/lesson/" + props.match.params.id + "/edit" + "/video"} class="news__link mb">Добавить <GrAdd /></Link>
            <div class="cards__content">
                <Item u={{ id: "123", name: "Привет видео" }} path="/VideoCourse" />
            </div>

        </LessonPage>
    )
}

export default compose(
    withRouter
)(LessonVideo)
