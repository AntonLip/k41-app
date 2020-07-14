import React from 'react';
import classes from './Timetable.module.css'




export class Timetable extends React.Component {


    
    getTimetable(props) {
        if (this.props.timetable.lenght === 0) {
            this.props.getTimetable();
        }
    }

    componentDidMount() {
        this.props.getTimetable();
    }


    render() {
        return (
            <div className={classes.card__lessons}>
                {
                    this.props.timetable.map(u => {
                        return (
                            <div class={classes.card__lessons} key={u.id}>
                                <div class={classes.card__lesson_item}>
                                    <div class={classes.card__lesson_number}>1</div>
                                    <div class={classes.titles}>
                                        <div class={classes.card__lesson_title}>{u.disciplineName}</div>
                                        <div class={classes.card__lesson_title}>{u.lessonType}</div>
                                        <div class={classes.card__lesson_title}>{u.auditoreNumber}</div>
                                        <div class={classes.card__lesson_title}>{u.lecturalName}</div>
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
            </div>);
    } 

}

