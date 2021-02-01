import React from 'react'
import { PlayerControlExample } from './../../../../Player/PlayerControlExample'
import MainContentWrapper from '../../../MainContentWrapper/MainContentWrapper';
import { Link, Route, withRouter } from 'react-router-dom';
import { GrLinkPrevious } from 'react-icons/gr';
import { FiEdit } from "react-icons/fi";
import { reduxForm } from 'redux-form';
import VideoCorsForm from '../VideoCorsForm';

export class VideoCourse extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getVideoCourse(id);
    }

    render() {
        console.log(this.props)
        return (
            <MainContentWrapper>
                <div class="fs-14">
                    <Route exact path="/VideoCourse/:id">
                        <Link to="/VideoCourses" class="news__link news__link--mr mb"><GrLinkPrevious class="news__link-img" />Назад ко всем видеокурсам</Link>
                        <Link to={this.props.match.url + "/edit"} class="news__link mb">Редактировать <FiEdit /></Link>
                        <p class="news__date mb">Название видеокурса: {this.props.VideoCourse.name}</p>
                        <p class="news__from mb">Информация о видеокурсе: {this.props.VideoCourse.info}</p>
                        <PlayerControlExample sources={this.props.VideoCourse.videos} id={this.props.match.params.id} />
                    </Route>
                    <Route path="/VideoCourse/:id/edit">
                        <Link onClick={this.props.history.goBack} class="news__link news__link--mr mb"><GrLinkPrevious class="news__link-img" />Назад к видеокурсу</Link>
                        <VideoCors />
                    </Route>
                </div>
            </MainContentWrapper >
        )
    }
}


const VideoCors = reduxForm({ form: "editVideoCors" })(() => {
    return (
        <form class="editForm">
            <VideoCorsForm />
            <button type="submit" class="chat-input__submit btn">Сохранить</button>
        </form>
    )
})

