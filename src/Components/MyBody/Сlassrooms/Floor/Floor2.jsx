import React from 'react'
import styles from './Floor.module.css'
import classNames from 'classnames'
const Floor2 = () => {
    return (
        <div id={styles.et2} className={styles.etaj}>
            <div id={styles.k291} className={classNames(styles.kab, styles.kabUch)}><span>291</span></div>
            <div id="k290a" className={classNames(styles.kab, styles.kabPrepod)}><span>290a</span></div>
            <div id="k290" className={classNames(styles.kab, styles.kabUch)}><span>290</span></div>
            <div id="k289" className={classNames(styles.kab, styles.kabPrepod)}><span>289</span></div>
            <div className={styles.kor}></div>
        </div>
    )
}

export default Floor2
