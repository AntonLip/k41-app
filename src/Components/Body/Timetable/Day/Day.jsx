import React from 'react'

const Day = (props) => {
    
    return (
        <>
            <div class="timetable__date">{props.date}</div>
            <div class="timetable__wrapper">
                {props.children}
            </div>
        </>
    )
}

export default Day
