import React from 'react';
import { Link } from 'react-router-dom';

import Logout from './Auth/Logout/Logout'
import { AuthClass } from './Auth/Auth';
import AuthComponent from './Auth/AuthComponent';

import logo from '../../assets/img/logo.png'

const Header = () => {

    return (
        <header class="header">
            <div class="container">
                <div class="header__wrapper">
                    <Link to="/" class="header__logo">
                        <img src={logo} alt="logo"></img>
                    </Link>
                    <h1 class="header__title">
                        Кафедра автоматизированных систем управления войсками
                    </h1>
                    <div class="header__profile">
                        <Logout/>
                    </div>
                </div>
            </div>
        </header>

        /*
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
        */
    );
}

export default Header;