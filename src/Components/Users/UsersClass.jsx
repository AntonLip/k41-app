import React from 'react'
import classes from './Users.module.css'
import { NavLink } from 'react-router-dom';


const UsersDisplay = (props) => {
    return (
        <div>
            <div key={props.u.id}>
                <div className={classes.container}>
                    <div id="card" className={classes.card}>
                        <div className={classes.card__img}></div>
                        <div className={classes.card__descr}>
                            <div className={classes.card__descr_block}>{props.u.militaryRank}</div>
                            <div className={classes.card__descr_block}>{props.u.firstName}</div>
                            <div className={classes.card__descr_block}>{props.u.middleName}</div>
                            <div className={classes.card__descr_block}>{props.u.lastName}</div>
                            <div className={classes.card__descr_block}>{props.u.position}</div>
                            <div className={classes.card__descr_block}>{props.u.birthDay}</div>
                        </div>
                        <button id="btn-more" className={classes.card__more_btn}>узнать больше</button>
                        <NavLink to={'/Profile/' + props.u.id}
                            className={classes.card__more_btn} >узнать больше</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

const SetFilter = () => {
    return (
        <div>
            <div>
                <label for="firstName">Имя</label>
                <input type="text" name="firstName" />
            </div>
            <div>
                <label for="middleName">Отчество</label>
                <input type="text" name="middleName" />
            </div>
        </div>);
}
export class Users extends React.Component {

    componentDidMount() {
        console.log(this.props);
        this.props.getUser();
    }

    render() {
        console.log(this.props);
        let AllUsers = this.props.users.map((u) => { return <UsersDisplay u={u} /> });
        debugger;
        if (!this.props.isAuth) {
            window.location = "/AccessDenided";
        }
        if (this.props.role === "cadets") {
            return (<div>{AllUsers}</div>)
        }
        return (
            <div className={classes.gridMain}>
                <div className={classes.gridLeftSide}>
                    <NavLink to="/newUser" className={classes.card__more_btn}>Добавить</NavLink>
                    <SetFilter />
                </div>
                <div>
                    {AllUsers}
                </div>
            </div>);
    }
}
