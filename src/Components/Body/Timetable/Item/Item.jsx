import React from 'react'

import Text from './Text/Text'

const Item = (props) => {
    if (props.u === undefined) {
        return (
            <div class="timetable-item timetable__item">
                <div class="timetable-item__wrapper">
                    <table>
                        <tr>
                            <td width="80">№<br></br>пары</td>
                            <td colspan="2">Название<br></br>дисциплины</td>
                            <td rowspan="3" width="300">
                                <Text />
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="4">1</td>
                            <td rowspan="2" width="150">ГЗ</td>
                            <td width="50">№</td>
                        </tr>
                        <tr>
                            <td>8</td>
                        </tr>
                        <tr>
                            <td colspan="2">Фамилия <br></br> преподавателя</td>
                            <td rowspan="2" width="300">
                                <Text />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2"><a href="#" class="timetable-item__link">Задать вопрос <br></br> преподавателю</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    } else {
        debugger
        return (
            <div class="timetable-item timetable__item" key={props.u.id}>
                <div class="timetable-item__wrapper">
                    <table>
                        <tr>
                            <td width="80">№<br></br>пары</td>
                            <td colspan="2">{props.u.nameOfDiscipline}</td>
                            <td rowspan="3" width="300">
                                <Text />
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="4">{props.u.numberOfLessonInDay}</td>
                            <td rowspan="2" width="150">{props.u.typeOfLesson}</td>
                            <td width="50">№</td>
                        </tr>
                        <tr>
                            <td>{props.u.numberOfLesson}</td>
                        </tr>
                        <tr>
                            <td colspan="2">{props.u.lectural}</td>
                            <td rowspan="2" width="300">
                                <Text />
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2"><a href="#" class="timetable-item__link">Задать вопрос <br></br> преподавателю</a></td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Item