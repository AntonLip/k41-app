import React from 'react';
import classes from './Timetable.module.css'
import { reduxForm, Field } from 'redux-form';




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
        <div>
            
            <div className={classes.gridMain}>
                <div className={classes.gridLeftSide}>
                    <TimetableReduxForm onSubmit={this.submit} role={this.props.user.profile} />
                </div>

                <div className={classes.container}>
                    <TT timetable={this.props.timetable} />
                </div>
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
<div className={classes.AllLessons}>
                        <div className={classes.card__lessons} key={u.id}>
                            <div className={classes.card__lesson_item}>
                                <div className={classes.card__lesson_number}>{u.numberOfLessonInDay}</div>
                                <div className={classes.titles}>
                                    <div className={classes.card__lesson_title}>{u.nameOfDiscipline}</div>
                                    
                        <div className={classes.card__lesson_item2}>
                                    <div className={classes.card__lesson_title}>{u.typeOfLesson}</div>
                                    <div className={classes.card__lesson_title2}>{u.numberOfLesson}</div>
                        </div>
                                    <div className={classes.card__lesson_title}>{u.auditore}</div>
                                    <div className={classes.card__lesson_title}>{u.lectural}</div>
                                     <div className={classes.card__lesson_title}>
                                         <div className={classes.MoreInfo}>
                                        <div className={classes.a1}>
                                            Подробнее
                                         </div>
                                         </div>
                                     </div>
                                </div>
                                <div className={classes.card__lesson_content}>
                                    <div className={classes.card__lesson_more}>{u.infoForCadets}</div>
                                    <input className={classes.card__lesson_more} type="text" required placeholder="просьба преподавателю"></input>
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
            <button className={classes.button}>Расписание</button>
        </form>
    );
}

const TimetableReduxForm = reduxForm({
    form: 'group'
})(TimetableFormRedux)

