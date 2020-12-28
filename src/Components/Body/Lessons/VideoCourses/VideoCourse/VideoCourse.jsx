import React from 'react'


import { reduxForm } from 'redux-form'
import { PlayerControlExample } from './../../../../Player/PlayerControlExample'

const year = [
    { title: "3 курс" },
    { title: "4 курс" },
    { title: "5 курс" }
]

export class VideoCourse extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getVideoCourse(id);

    }

    render() {
        return (
            <div>
                <div>
                    {this.props.VideoCourse.name}
                </div>
                <div>
                    {this.props.VideoCourse.info}
                </div>
                <PlayerControlExample sources={this.props.VideoCourse.videos} id={this.props.match.params.id}/>
            </div>)
    }
}




