import React from 'react'
import { confirmAlert } from 'react-confirm-alert'
import { AiOutlineDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { GrLinkPrevious } from 'react-icons/gr'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { Field, initialize, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { setLecturalsThunkCreator } from '../../../../Redux/generalInfo-reduser'
import { cleanCurrentNewsThunkCreator, deleteNewsThunkCreator, putNewsThunkCreator, setCurrentNewsThunkCreator, setNewsThunkCreator } from '../../../../Redux/news-reduser'
import MainContentWrapper from '../../MainContentWrapper/MainContentWrapper'

class EditNews extends React.Component {

    componentDidMount() {
        this.props.getSingleNews(this.props.match.params.id)
        this.props.initForm(this.props.news)
    }

    update=(value)=>{
        this.props.putNews(this.props.match.params.id,value)
        this.props.history.push("/news/" + this.props.match.params.id)
    }

    render() {
        console.log(this.props)
        return (
            <MainContentWrapper>
                <div class="news__wrapper">
                    <div class="d-f">
                        <Link to="/" class="news__link d-f mr" onClick={this.props.clearCurrentNews}><GrLinkPrevious class="news__link-img" />
                            Назад ко всем новостям
                        </Link>
                    </div>
                    <form onSubmit={this.props.handleSubmit(this.update)} class="editFrom">
                        <div>Кому:</div>
                        <Field name="To" size="1" component="select">
                            <option value="Всем">Всем</option>
                            {this.props.persons.map((item) => {
                                return <option value={item.name}>{item.name}</option>
                            })}
                        </Field>
                        <div>Заголовок:</div>
                        <Field name="Header" component="input" type="text"></Field>
                        <div>Текст:</div>
                        <Field name="Text" rows="5" component="textarea"></Field>
                        <button type="submit" class="chat-input__submit btn">Сохранить</button>
                        <Link to={"/news/" + this.props.match.params.id} class="chat-input__submit btn">Отменить</Link>
                    </form>
                </div>
            </MainContentWrapper>
        )
    }

}

let maptoStateToProps = (state) => {
    return {
        news: state.newsReduser.currentNews,
        persons: state.generalInfoReduser.info.lecturals,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getSingleNews: (id) => {
            dispatch(setCurrentNewsThunkCreator(id));
        },
        deleteNews: (id, isDelete) => {
            dispatch(deleteNewsThunkCreator(id, isDelete));
        },
        getPersons: () => {
            dispatch(setLecturalsThunkCreator());
        },
        initForm: (data) => {
            dispatch(initialize('editNews', data))
        },
        putNews: (id, data) => {
            dispatch(putNewsThunkCreator(id, data))
        },
        clearCurrentNews: () => {
            dispatch(cleanCurrentNewsThunkCreator())
        }
    }
}


export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
    withRouter,
    reduxForm({ form: 'editNews', })
)(EditNews)  
