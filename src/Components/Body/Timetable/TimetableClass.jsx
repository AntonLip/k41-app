import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Fileupload from '../../UploaderFile/Uploader';




export class Timetable extends React.Component {

    componentDidMount() {
        this.props.getUser();
        var day = new Date().getDay();
        var month = new Date().getMonth();
        var year = new Date().getFullYear();
        var fullDate = year + "-" + month + "-" + day + " 00:00:00.0000000"
        this.props.getTimetable(this.props.currGroup, fullDate);
    }

    getTT = (group, fullDate) => {

        this.props.getTimetable(group, fullDate);
    }

    submit = values => {
        // print the form values to the console
        var fullDate = values.date + " 00:00:00.0000000";
        var group = values.group;

        console.log(values)
        this.getTT(group, fullDate)
    }
    render() {
        return (
            <div >
                <div >
                    <TimetableReduxForm onSubmit={this.submit} role={this.props.user.profile} />
                </div>
                <div>
                    <Fileupload></Fileupload>
                </div>
                <div >
                    <TT timetable={this.props.timetable} />
                </div>
            </div>
        );
    }

}

const TT = (props) => {
    return (
        <div>
            {
                props.timetable.map(u => {
                    return (
                        <div >
                            <div  key={u.id}>
                                <div >
                                    <div >{u.numberOfLessonInDay}</div>
                                    <div >
                                        <div >{u.nameOfDiscipline}</div>

                                        <div >
                                            <div >{u.typeOfLesson}</div>
                                            <div >{u.numberOfLesson}</div>
                                        </div>
                                        <div >{u.auditore}</div>
                                        <div >{u.lectural}</div>
                                        <div  style={{ backgroundColor: "#d9fbff" }}>
                                            <div >
                                                <div >
                                                    ПОДРОБНЕЕ
                                         </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div >

                                        <div >{u.infoForCadets}</div>
                                        <input  type="text" required placeholder="просьба преподавателю"></input>
                                        <div  style={{ height: 38, backgroundColor: "#d9fbff" }}><div >
                                            <div >
                                                ОТПРАВИТЬ
                                         </div>
                                        </div></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    );
                }
                )
            }
        </div>
    );
}

const TimetableFormRedux = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div >
                <div >
                    <Field placeholder={"Enter number of group"} name={"group"} component={'input'} />
                </div>
                <div>
                    <Field component={'input'} type="date" data-date="" data-date-format="DD MMMM YYYY" name={"date"} />
                </div>
            </div>
            <button >Расписание</button>
        </form>
    );
}

const TimetableReduxForm = reduxForm({
    form: 'group'
})(TimetableFormRedux)

