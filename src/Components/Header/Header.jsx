import React from 'react';
import { Link } from 'react-router-dom';
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
                        <AuthComponent/>
                    </div>
                </div>
            </div>
        </header>       
    );
}

export default Header;