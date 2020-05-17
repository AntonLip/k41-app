import React from 'react';
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom';


const Navbar = () => {

  return (
    <nav className={classes.MyNav}>
      <div>
        <NavLink to="/Timetable" className={classes.item}>Расписание занятий</NavLink>
      </div>
      <div>
        <NavLink to="/MyNews" className={classes.item}>Аудитории</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;