import React, { useState } from 'react'
import { FieldArray, reduxForm } from 'redux-form'
import InputDropDown from '../../../../Sort/Items/Input/items/InputDropDown/InputDropDown'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getCousresNamesThunkCreator } from '../../../../../../Redux/video-courses-redusers';
import { AiFillDelete } from 'react-icons/ai';

const video = [
    {}
]

class LessonsVideoForm extends React.Component {
    componentDidMount() {
        this.props.getVideoCourses()
    }

    renderMembers = ({ fields, meta: { error, submitFailed } }) => {
        return (
            <>
                <button type="button" class="chat-input__submit btn" onClick={() => fields.push({})}>Добавить материал</button>
                {fields.map((member, index) => (
                    <div class="d-f ai-c mb">
                        <div class="w-100 mr">
                            <InputDropDown title="Видео из видеотеки" linkWithId={this.props.videocourses} size="1" name="VideoID" />
                        </div>
                        <AiFillDelete onClick={() => fields.remove(index)} />
                    </div>
                ))}
            </>
        )

    }

    render() {
        console.log(this.props)
        return (
            <form class="editForm">
                <FieldArray name="Item" component={this.renderMembers} />
                <button type="submit" class="chat-input__submit btn">Добавить видео</button>
            </form>
        )
    }
}

    let maptoStateToProps = (state) => {
        return {
            videocourses: state.VideoCoursesReducers.nameofCorses,
        }
    }

let mapDispatchToProps = (dispatch) => {
    return {
        getVideoCourses: () => {
            dispatch(getCousresNamesThunkCreator());
        },
    }
}

export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
    reduxForm({ form: 'editLessonVideo' })
)(LessonsVideoForm)

