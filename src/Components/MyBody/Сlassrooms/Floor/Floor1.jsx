import React from 'react'
import styles from './Floor.module.css'
import classNames from 'classnames'
const Floor1 = () => {
    return (
        <div id={styles.et1} className={styles.etaj}>
        <div className={styles.kor}></div>
            <div id="k200" className={classNames(styles.kab, styles.kabUch)}><span>200</span></div>
            <div id="k198" className={classNames(styles.kab, styles.kabUch)}><span>198</span></div>
            <div className={styles.kor}></div>
            <div id="k194" className={classNames(styles.kab, styles.kabUch)}><span>194</span></div>
            <div id="k192" className={classNames(styles.kab, styles.kabUch)}><span>192</span></div>
            <div id="k193" className={classNames(styles.kab, styles.kabPrepod)}><span>193</span></div>
            <div className={classNames(styles.kor, styles.korFull)}></div>
            <div className={classNames(styles.kor, styles.korFull)}></div>
            <div id="k203" className={classNames(styles.kab, styles.kabUch)}><span>203</span></div>
            <div id="k201" className={classNames(styles.kab, styles.kabUch)}><span>201</span></div>
            <div id="k199" className={classNames(styles.kab, styles.kabPrepod)}><span>199</span></div>
            <div id="k197" className={classNames(styles.kab, styles.kabUch)}><span>197</span></div>
            <div id="k195" className={classNames(styles.kab, styles.kabUch)}><span>195</span></div>
            <div id="k193" className={classNames(styles.kab, styles.kabUch)}><span>193</span></div>
            <div id="k191" className={classNames(styles.kab, styles.kabUch)}><span>191</span></div>
        </div>
    )
}

export default Floor1
