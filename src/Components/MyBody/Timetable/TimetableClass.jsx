import React from 'react';
import classes from './Timetable.module.css'




export class Timetable extends React.Component {


    
    getTimetable(props) {
        if (this.props.timetable.lenght === 0) {
            this.props.getTimetable(442, "2020-09-03 00:00:00.0000000");
        }
    }

    componentDidMount() {
        this.props.getTimetable(442, "2020-09-03 00:00:00.0000000");
    }


    render() {
        return (
            <div className={classes.card__lessons}>
                {
                    this.props.timetable.map(u => {
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
                                    <div class={classes.card__lesson_content}> </div>
                                </div>
                            </div>
                        );
                    }
                    )
                } 
            </div>);
    } 

}

