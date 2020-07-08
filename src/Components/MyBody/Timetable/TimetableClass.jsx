import React from 'react';
import * as axios from 'axios'
import classes from './Timetable.module.css'




export class Timetable extends React.Component {


    stringOfEndPoint = 'https://localhost:44351/api/LessonDTOes/';
    getTimetable(props) {
        debugger;
        if (this.props.timetable.lenght === 0) {
            axios.get(this.stringOfEndPoint).then(Response => {
                this.props.setData(Response.data);
            })
        }
    }

    componentDidMount() {
        debugger;
        //let id = this.props.match.params.id;
        axios.get(this.stringOfEndPoint).then(Response => {
            this.props.setData(Response.data);
        });
    }


    render() {
        debugger;

        return (
            <div className={classes.card__lessons}>
                {
                    this.props.timetable.map(u => {
                        return (
                            <div className={classes.card__lesson_item} key={u.id}>
                                <div className={classes.card__lesson_title}>{u.disciplineName}</div>
                                <div className={classes.card__lesson_content}>
                                    <div className={classes.card__lesson_more} >{u.lessonType}</div>
                                    <div className={classes.card__lesson_more} >{u.auditoreNumber}</div>
                                </div>
                                <div className={classes.card__lesson_title}>{u.lecturalName}</div>
                                <div className={classes.card__lesson_content}>
                                    <input className={classes.card__lesson_more} type="text" required placeholder={u.infoForCadets}></input>
                                    <input className={classes.card__lesson_more} type="text" required placeholder="просьба преподавателю"></input>
                                </div>
                            </div>
                        );
                    }
                    )
                }
                <script src="./script.js"></script>

            </div>);
    }

    /*
            <div className={classes.card__lessons}>
            <div className={classes.card__lesson_item}>
               <div className={classes.card__lesson_number}>1</div>
               <div className={classes.card__lesson_title}>название дисциплины</div>
               <div className={classes.card__lesson_content}>
                  <input className={classes.card__lesson_more} type="text" required placeholder="задание группе"></input>
                  <input className={classes.card__lesson_more} type="text" required placeholder="просьба преподавателю"></input>
               </div>
            </div>
            <div className={classes.card__lesson_item}>
               <div className={classes.card__lesson_number}>2</div>
               <div className={classes.card__lesson_title}>название дисциплины</div>
               <div className={classes.card__lesson_content}>
                  <input className={classes.card__lesson_more} type="text" required placeholder="задание группе"></input>
                  <input className={classes.card__lesson_more} type="text" required placeholder="просьба преподавателю"></input>
               </div>
            </div>
            <div className={classes.card__lesson_item}>
               <div className={classes.card__lesson_number}>3</div>
               <div className={classes.card__lesson_title}>название дисциплины</div>
               <div className={classes.card__lesson_content}>
                  <input className={classes.card__lesson_more} type="text" required placeholder="задание группе"></input>
                  <input className={classes.card__lesson_more} type="text" required placeholder="просьба преподавателю"></input>
               </div>
            </div>
            <div className={classes.card__lesson_item}>
               <div className={classes.card__lesson_number}>4</div>
               <div className={classes.card__lesson_title}>название дисциплины</div>
               <div className={classes.card__lesson_content}>
                  <input className={classes.card__lesson_more} type="text" required placeholder="задание группе"></input>
                  <input className={classes.card__lesson_more} type="text" required placeholder="просьба преподавателю"></input>
               </div>
            </div>
         </div>
         */

}

