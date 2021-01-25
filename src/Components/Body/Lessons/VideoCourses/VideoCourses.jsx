import React from 'react'
import { compose } from 'redux'
import MainContentWrapper from '../../MainContentWrapper/MainContentWrapper'

import Item from './../../../Body/Cards/Item'
import Sort from '../../Sort/SortItem'

import { Field, FieldArray, reduxForm, reset } from 'redux-form'
import { Link, Route } from 'react-router-dom'
import { Input } from '../../Sort/Items/Input/Input'
import InputFile, { FileInput } from '../../Sort/Items/Input/items/File/InputFile'
import TextInput from '../../Sort/Items/Input/items/TextInput/TextInput'
import TextArea from '../../Sort/Items/Input/items/TextArea/TextArea'
import { AiFillDelete } from 'react-icons/ai'
import InputItem from '../../Sort/Items/Input/items/InputItem'
import VideoCorsForm from './VideoCorsForm'

export class VideoCourses extends React.Component {
    printInfo = (values) => {
        console.log(values)
    }
    componentDidMount() {
        this.props.getVideoCourses();
        this.props.getDisciplinesName();
    }

    render() {
        let AllCourses;
        this.props.videocourses === undefined ? AllCourses = () => { return <Item /> } :
            this.props.videocourses.length != 0 ?
                AllCourses = this.props.videocourses.map((u) => { return <Item u={u} path="/VideoCourse/" /> }) :
                AllCourses = () => { return <Item /> };

        console.log(this.props)
        return (
            <MainContentWrapper leftSideBar="false">
                <div class="sort cards__sort">
                    <InputForm title="Добавить видео" link={this.props.persons} btnText="Добавить" onSubmit={this.post}>
                        <VideoCorsForm/>
                    </InputForm>
                    <Link to="/VideoCourses" class="sort__item">
                        <div class="sort__title">Все</div>
                        <div class="sort__img"></div>
                    </Link>
                    {
                        this.props.nameofDiscoplines.map((u) => {
                            return (<Link to={"/VideoCourses/" + u.name} class="sort__item">
                                <div class="sort__title">{u.name}</div>
                                <div class="sort__img"></div>
                            </Link>)
                        })
                    }
                </div>
                <div class="cards">
                    <div class="cards__content">
                        <Route exact path="/VideoCourses" render={() => AllCourses} />
                        <Route path="/VideoCourses/:name" render={() => <></>} />
                    </div>
                </div>

            </MainContentWrapper>

        )
    }
}



const InputForm = compose(
    reduxForm({
        form: 'inputVideo',
        onSubmitSuccess: (rezult, dispatch) => { dispatch(reset('inputNews')) },
    })
)(Input)


