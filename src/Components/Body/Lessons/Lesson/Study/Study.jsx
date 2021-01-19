import React from 'react'
import LessonItem from '../LessonItem/LessonItem'

const Study = (props) => {
    return (
        <>
            <LessonItem title="Лекция 1">
            <div>{props.themeName}</div>
                {/* <div>{props.name}</div>
                <a href={props}>HELLO</a> */}
                <div>HELLO</div>
            </LessonItem>           
        </>
    )
}

export default Study
