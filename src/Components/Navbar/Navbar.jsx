import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  {
    title: "Новости",
    link: "/",
  },
  {
    title: "Учеба",
    submenu: [
      {
        title: "Расписание занятий",
        link: "/timetable"
      },
      {
        title: "Дисциплины кафедры",
        link: "/lessons"
      },
      // {
      //   title: "Видеоуроки",
      //   link: "/VideoCourses"
      // }
    ]
  },
  {
    title: "Кафедра",
    submenu: [
      {
        title: "Курсанты",
        link: "/cadets"
      },
      {
        title: "Офицеры",
        link: "/officers"
      },
      {
        title: "Аудитории",
        link: "/classrooms"
      },
      // {
      //   title: "Техника",
      //   link: "/tech"
      // },
      {
        title: "История",
        link: "/history"
      },
    ]
  },
  // {
  //   title: "Наука",
  //   link: "/science",
  // },
]

const Navbar = () => {
  return (
    <nav class="nav">
      <div class="container">
        <nav class="nav-menu">
          <ul class="nav-menu__list">
            {navLinks.map(item => {
              if(item.submenu){
                return(
                  <li class="nav-menu__item">
                    <a class="nav-menu__link btn">{item.title}</a>
                    <div class="submenu nav-menu__submenu">
                      <ul className="submenu__wrapper">
                        {item.submenu.map(submenuItem => {
                          return <li class="submenu__item"><Link to={submenuItem.link} class="submenu__link">{submenuItem.title}</Link></li>
                        })}
                      </ul>
                    </div>
                  </li>
                )}
              else{
                return <li class="nav-menu__item"><Link to={item.link} class="nav-menu__link btn">{item.title}</Link></li>
              }
            })}
          </ul>
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;