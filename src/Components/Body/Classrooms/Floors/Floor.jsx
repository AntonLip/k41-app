import React from 'react'

const Floor = (props) => {
    return (
        <div class="classrooms__wrapper">
            <span>{props.title}</span>
                {props.children}
        </div>
    )
}

export default Floor
