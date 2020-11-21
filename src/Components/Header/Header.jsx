import React from 'react';
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';
import { AuthClass } from './Auth/Auth';
import AuthComponent from './Auth/AuthComponent';


const Header = () => {

    return (
        <header className={classes.MyHeader}>
            <div className={classes.headerContent}>
                <div className={classes.headerXZ}>                
                            <ul class={classes.menu}>
                                <li class={classes.l1}><NavLink to="/MyNews">Новости</NavLink></li>
                                <li class={classes.l1}>
                                    <a href="#">Учеба</a>
                                    <ul class={classes.hidden}>
                                        <li><NavLink to="/Timetable">Расписание занятий</NavLink></li>
                                        <li><NavLink to="/Timetable">Дисциплины кафедры</NavLink></li>
											</ul>
                                </li>
                                <li class={classes.l1}>
                                    <NavLink to="/Timetable">Кафедра</NavLink>
                                    <ul class={classes.hidden}>
                                        <li><NavLink to="/Cadets">Курсанты</NavLink></li>
                                        <li><NavLink to="/Users">Офицеры</NavLink></li>
                                        <li><NavLink to="/Сlassrooms">Аудитории</NavLink></li>
                                        <li><NavLink to="/Timetable">Техника</NavLink></li>
                                        <li><NavLink to="/History">История</NavLink></li>
                                    </ul>
                                </li>
                                <li class={classes.l1}><a href="#">Наука</a></li>
                            </ul>                        
                </div>
                <AuthComponent/>                
               
            </div>
           
        </header>
    );
}

export default Header;