import React from 'react';
import classes from './Timetable.module.css'
import { reduxForm, Field } from 'redux-form';




export class Timetable extends React.Component {



    getTimetable(props) {
        if (this.props.timetable.lenght === 0) {
            this.props.getTimetable(442, "2020-09-03 00:00:00.0000000");
        }
    }

    componentDidMount() {
        var day = new Date().getDay();
        var month = new Date().getMonth();
        var year = new Date().getFullYear();
        var fullDate = year + "-" + month + "-" + day + " 00:00:00.0000000"
        //debugger;

        //var currentTimeDate = new Date()
        this.props.getTimetable(this.props.currGroup, "2020-09-03 00:00:00.0000000");
    }

    getTT = (group, fullDate) => {
        debugger;
        this.props.getTimetable(group, fullDate);
    }

    submit = values => {
        // print the form values to the console
        var fullDate = values.date + " 00:00:00.0000000";
        var group = values.group;
        debugger;
        console.log(values)
        this.getTT(group, fullDate)
    }
    render() {
        return (
            <div>
                <TimetableReduxForm onSubmit={this.submit} />
                <TT timetable={this.props.timetable} />
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

                        <div class={classes.card__lessons} key={u.id}>
                            <div class={classes.card__lesson_item}>
                                <           div class={classes.card__lesson_number}>{u.numberOfLessonInDay}</div>
                                <div class={classes.titles}>
                                    <div class={classes.card__lesson_title}>{u.nameOfDiscipline}</div>
                                    <div class={classes.card__lesson_title}>{u.typeOfLesson}</div>
                                    <div class={classes.card__lesson_title}>{u.auditore}</div>
                                    <div class={classes.card__lesson_title}>{u.lectural}</div>
                                </div>
                                <div class={classes.card__lesson_content}>
                                    <div class={classes.card__lesson_more}>{u.infoForCadets}</div>
                                    <input class={classes.card__lesson_more} type="text" required placeholder="просьба преподавателю"></input>
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
            <button className={classes.button}>Расписание</button>
        </form>
    );
}
const TimetableReduxForm = reduxForm({
    form: 'group'
})(TimetableFormRedux)

