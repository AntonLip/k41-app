import React from 'react'
import * as axios from 'axios'
import classes from './Users.module.css'
import { NavLink } from 'react-router-dom';
 
export class Users extends React.Component {

    stringOfEndPoint = "https://localhost:44351/api/Lecturals/Min";

    
 
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
                                        <NavLink to={'/Profile/' + u.id}
                                         className={classes.card__more_btn} >узнать больше</NavLink>
                                    </div>                                    
                                </div>
                            </div>
                        );
                    }
                    )
                }
                <script src="./script.js"></script>
                
            </div>);
    }
}