import React from 'react'
import classes from './VideoCourse.module.css'
import { PlayerControlExample } from './../../../../Player/PlayerControlExample'

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
                </div >
                <div >

                </div>
                <PlayerControlExample sources={this.props.VideoCourse.videos} id={this.props.match.params.id} />
            </div>)
    }
}




