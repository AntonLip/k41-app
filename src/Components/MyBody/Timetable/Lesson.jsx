import React from 'react';
import classes from './Timetable.module.css'

export const Lesson = (props) => {
    debugger;
    return (
        <div>        
            <div className={classes.card__lessons} key={props.id}>
                <div className={classes.card__lesson_item}>
                    <div className={classes.card__lesson_number}>{props.numberOfLessonInDay}ghfgjndgjnfg</div>
                    <div className={classes.titles}>
                        <div className={classes.card__lesson_title}>{props.nameOfDiscipline}</div>
                        <div className={classes.card__lesson_item2}>
                            <div className={classes.card__lesson_title1}>{props.nameOfLesson}</div>
                            <div className={classes.card__lesson_title2}>{props.numberOfLesson}</div>
                        </div>
                        <div className={classes.card__lesson_title}>{props.audienceNumber}</div>
                        <div className={classes.card__lesson_title}>{props.teacherName}</div>
                    </div>
                    <div className={classes.card__lesson_content}>
                        <input className={classes.card__lesson_more} type="text" required placeholder={props.infoForCadets}></input>
                        <input className={classes.card__lesson_more} type="text" required placeholder="просьба преподавателю"></input>
                    </div>
                </div>
                <button className={classes.send} type="submit">Ввод</button>
            </div>
        </div>
    );
}
