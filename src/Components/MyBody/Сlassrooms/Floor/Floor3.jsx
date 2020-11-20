import React from 'react'
import styles from './Floor.module.css'
import classNames from 'classnames'
const Floor3 = () => {
    return (
        <div id={styles.et3} className={styles.etaj}>
            <div id={styles.k382} className={classNames(styles.kab, styles.kabUch)}><span>382</span></div>
            <div id="k381" className={classNames(styles.kab, styles.kabUch)}><span>381</span></div>
            <div id="k380" className={classNames(styles.kab, styles.kabUch)}><span>380</span></div>
            <div id="k379" className={classNames(styles.kab, styles.kabPrepod)}><span>379</span></div>
            <div className={styles.kor}></div>
        </div>
    )
}

export default Floor3