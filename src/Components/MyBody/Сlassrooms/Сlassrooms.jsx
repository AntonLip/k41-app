import React from 'react'
import styles from './Сlassrooms.module.css'
import {Link, Route} from 'react-router-dom'
import Floor1 from './Floor/Floor1'
import Floor2 from './Floor/Floor2'
import Floor3 from './Floor/Floor3'

const Сlassrooms = (props) => {
    return (
        <div className={styles.screen}>
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__item}>
                    <Link to="/Сlassrooms/floor1" className={styles.nav__link}>этаж 1</Link>
                </li>
                <li className={styles.nav__item}>
                    <Link to="/Сlassrooms/floor2" className={styles.nav__link}>этаж 2</Link>
                </li>
                <li className={styles.nav__item}>
                    <Link to="/Сlassrooms/floor3" className={styles.nav__link}>этаж 3</Link>
                </li>
            </ul>
        </nav>
        
        <Route path="/Сlassrooms/floor1" render={()=>{return <Floor1/>} }/>
        <Route path="/Сlassrooms/floor2" render={()=>{return <Floor2/>} }/>
        <Route path="/Сlassrooms/floor3" render={()=>{return <Floor3/>} }/>
          
    </div> 
    )
}

export default Сlassrooms
