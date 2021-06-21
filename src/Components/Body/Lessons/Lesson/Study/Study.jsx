import React from 'react'
import { GrAdd, GrLinkPrevious } from 'react-icons/gr'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { deleteDisciplines } from '../../../../../API/DisciplineAPI'
import LessonItem from '../LessonItem/LessonItem'
import LessonPage from '../LessonPage/LessonPage'

const Study = (props) => {
    
    let allLessons;
    allLessons = props.data.map(
        (u) => {
            return <LessonItem lessonId={u.id} title={u.lessonType + " " + u.currentNumberOflessonsType} deleteLesson={props.deleteLesson}>
                <div>Тема: {u.themeName}</div>
                <div>Занятие: {u.name}</div>
                <div>
                    <a href={"http://localhost:5000/api/Lessons/" + u.id + "/methodic"}>Методическая разработка</a>
                </div>
                <div>
                    <a href={"http://localhost:5000/api/Lessons/" + u.id + "/presentation"}>Презентация</a>
                </div>
                <div>
                    <a href={"http://localhost:5000/api/Lessons/" + u.id + "/additionalMaterial"}>Дополнительные материалы</a>
                </div>
            </LessonItem>
        })

    let deleteDiscipline = () =>{
        deleteDisciplines(props.match.params.id)
    } 
    return (
        <LessonPage>
            <Link to={props.match.url + "/edit"} class="news__link mb" >Добавить <GrAdd /></Link>
            <button  class="news__link mb" onClick={deleteDiscipline}>Удалить дисциплину</button>
            {allLessons}
        </LessonPage>

    )
}

export default compose(
    withRouter
)(Study)
