import React from 'react'
import { GrAdd, GrDocumentDownload } from 'react-icons/gr'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import LessonPage from '../LessonPage/LessonPage'

const LessonPlan = (props) => {
    debugger
    return (
        <LessonPage>
            <Link to={"/lesson/" + props.match.params.id + "/edit" + "/plan"} class="news__link mb">Изменить <GrAdd /></Link>
            <div class="disciplines_info">  {props.discipline.fullName} читается в {props.discipline.semester} семестре </div>
            <div class="disciplines_info">Последние правки плана {props.discipline.dateOfPlan}</div>
            <div class="disciplines_info">
            <a  href={"http://192.168.5.250/api/Disciplines/" + props.match.params.id + "/plan"}
                class="news__file d-ib">Скачать план <GrDocumentDownload class="news__file-img" /> </a>
            <a  href={"http://192.168.5.250/api/Disciplines/" + props.match.params.id + "/gpid"}
                class="news__file d-ib">Скачать ГПИД <GrDocumentDownload class="news__file-img" /> </a>
            </div>         

            <div class="table_dark">
                <table>
                    <tr>
                        <th>Тип занятия</th>
                        <th>Количеств часов</th>
                    </tr>
                    <tr>
                        <th>Лекционные занятия</th>
                        <th>{props.discipline.countHoursLeck}</th>
                    </tr>
                    <tr>
                        <th>Групповые занятия</th>
                        <th>{props.discipline.countHoursGZ}</th>
                    </tr>
                    <tr>
                        <th>Практические занятия</th>
                        <th>{props.discipline.countHoursPZ}</th>
                    </tr>
                    <tr>
                        <th>Лабороторные занятия</th>
                        <th>{props.discipline.countHoursLR}</th>
                    </tr>
                    <tr>
                        <th>Семинарские занятия</th>
                        <th>{props.discipline.countHoursSEM}</th>
                    </tr>
                    <tr>
                        <th>Методические занятия</th>
                        <th>{props.discipline.countHoursMZ}</th>
                    </tr>
                    <tr>
                        <th>Самостоятельная работа под руководством преподавателя</th>
                        <th>{props.discipline.countHoursSWZ}</th>
                    </tr>
                    <tr>
                        <th>Контрольная работа</th>
                        <th>{props.discipline.countHoursСontrolWork}</th>
                    </tr>
                    {
                        props.discipline.isExam ? <tr>
                            <th>Зачет</th>
                            <th>{props.discipline.countHoursTest}</th></tr> : <tr></tr>
                    }
                    <tr>
                        <th>Всего </th>
                        <th>{props.discipline.countHours}</th>
                    </tr>
                </table>
            </div>
        </LessonPage >
    )
}

export default compose(
    withRouter
)(LessonPlan)

