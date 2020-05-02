import React from 'react';
import classes from './Header.module.css'


const Header = () => {

    return (
        <header className={classes.MyHeader}>
            <div>
                <img src="https://html5book.ru/wp-content/uploads/2014/07/Fringe.jpg" />
            </div>
        </header>
    );
}

export default Header;