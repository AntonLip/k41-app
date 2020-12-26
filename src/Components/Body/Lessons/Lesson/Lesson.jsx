import React from 'react'


import { reduxForm } from 'redux-form'
import { PlayerControlExample } from './../../../Player/PlayerControlExample'

const year = [
    { title: "3 курс" },
    { title: "4 курс" },
    { title: "5 курс" }
]

export class Lesson extends React.Component {
    printInfo = (values) => {
        console.log(values)
    }
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <PlayerControlExample />
            </div>)
    }
}




