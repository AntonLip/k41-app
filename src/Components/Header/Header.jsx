import React from 'react';
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';


const Header = () => {

    return (
        <header className={classes.MyHeader}>
            <div className={classes.headerContent}>
                <div className={classes.headerXZ}>
                      
                </div>
                <div className={classes.buttonContainer}>
                    <NavLink to="/Timetable" className={classes.buttomHeader}>Новости</NavLink>
                    <NavLink to="/Timetable" className={classes.buttomHeader}>Кафедра</NavLink>
                    <NavLink to="/Timetable" className={classes.buttomHeader}>Фотогалерея</NavLink>
                    <NavLink to="/Timetable" className={classes.buttomHeader}>ЭУМК</NavLink>
                </div>
                <div className={classes.AuthHeader}>
                        Auth block
                </div>
            </div>

        </header>
    );
}

export default Header;