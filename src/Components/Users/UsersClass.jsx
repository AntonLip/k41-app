import React from 'react'
import * as axios from 'axios'
import classes from './Users.module.css'

export class Users extends React.Component {

    stringOfEndPoint = "https://localhost:44351/api/Lecturals";

    getUsers() {
        if (this.props.users.length === 0) {
            axios.get(this.stringOfEndPoint).then(Response => {
                this.props.setUsers(Response.data);
            })
        }
    }

    componentDidMount() {
        axios.get(this.stringOfEndPoint).then(Response => {
            this.props.setUsers(Response.data);
        });
    }

    render() {
        return (
            <div>
                {
                    this.props.users.map(u => {
                        return (
                            <div key={u.id}>
                                <div className={classes.container}>
                                    <div id="card" className={classes.card}>
                                        <div className={classes.card__img}></div>
                                        <div className={classes.card__descr}>
                                            <div className={classes.card__descr_block}>{u.militaryRank}</div>
                                            <div className={classes.card__descr_block}>{u.firstName}</div>
                                            <div className={classes.card__descr_block}>{u.middleName}</div>
                                            <div className={classes.card__descr_block}>{u.lastName}</div>
                                            <div className={classes.card__descr_block}>{u.position}</div>
                                            <div className={classes.card__descr_block}>{u.birthDay}</div>
                                        </div>
                                        <button id="btn-more" className={classes.card__more_btn}>узнать больше</button>
                                    </div>

                                    <div id="card-big" class={classes.card_big}>
                                        <div className={classes.card_big__main}>
                                            <div className={classes.card_big__img}></div>
                                            <div className={classes.card_big__descr}>
                                                <div className={classes.card_big__descr_block}>{u.militaryRank}</div>
                                                <div className={classes.card_big__descr_block}>{u.firstName}</div>
                                                <div className={classes.card_big__descr_block}>{u.middleName}</div>
                                                <div className={classes.card_big__descr_block}>{u.lastName}</div>
                                                <div className={classes.card_big__descr_block}>{u.position}</div>
                                                <div className={classes.card_big__descr_block}>{u.academicDegree}</div>
                                                <div className={classes.card_big__descr_block}>{u.isMarried}</div>
                                            </div>
                                        </div>
                                        <div className={classes.card_big__info}>{u.info}</div>
                                        <div className={classes.card_big__footer}>
                                            <div className={classes.card_big__footer_img}></div>
                                            <div className={classes.card_big__footer_other}>
                                                <div className={classes.card_big__footer_subject}>АЛВС</div>
                                                <div className={classes.card_big__footer_specialty}>САФ</div>
                                            </div>
                                            <div className={classes.card_big__footer_descr}>sfsdfsdfsdfdsfsdf</div>
                                        </div>
                                        <div id="bigCardClose" className={classes.card_big__close}></div>
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