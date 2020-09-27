
import React from 'react'
import { NavLink } from 'react-router-dom';

import classes from './Cadets.module.css'

const CadetsDisplay = (props) => {
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
                            <div className={classes.card__descr_block}>{props.u.groupNumber}</div>
                        </div>
                       
                        <button id="btn-more" className={classes.card__update_btn}>изменить</button>
                        <NavLink to={'/updateUser/' + props.u.id}
                            className={classes.card__update_btn} >изменить</NavLink>
                        <button id="btn-more" className={classes.card__del_btn} >удалить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}




export class CadetsClass extends React.Component {

    componentDidMount() {
        this.props.getCadets();        
    }
    render() {

        console.log(this.props);
        let AllCadtes = this.props.cadets.map((u) => { return <CadetsDisplay u={u}  /> });
        
        if (!this.props.isAuth) {
            window.location = "/AccessDenided";
        }
        if (this.props.role === "cadet") {
            return (<div>{AllCadtes}</div>)
        }
        return (
            <div className={classes.gridMain}>
                <div className={classes.gridLeftSide}>
                    <NavLink to="/newUser" className={classes.card__more_btn}>Добавить</NavLink>
                    
                </div>
                <div>
                    {AllCadtes}
                </div>
            </div>);
    }
}