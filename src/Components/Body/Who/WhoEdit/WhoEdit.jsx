import React from 'react'
import { GrLinkPrevious } from 'react-icons/gr'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import MainContentWrapper from '../../MainContentWrapper/MainContentWrapper'
import { connect } from 'react-redux'
import { getFilteredCadetsThunkCreator, getFilteredofficersThunkCreator, getofficersThunkCreator ,getCadetsThunkCreator } from '../../../../Redux/whos-reduser'
import InputDropDown from '../../Sort/Items/Input/items/InputDropDown/InputDropDown'
import TextArea from '../../Sort/Items/Input/items/TextArea/TextArea'
import { InputDate } from '../../Sort/Items/Date/InputDate'
import InputFile from '../../Sort/Items/Input/items/File/InputFile'
import { CheckboxArea } from '../../Sort/Items/Input/items/Checkdox/InputCheckbox'
import { reduxForm } from 'redux-form'

class WhoEdit extends React.Component {
    
    componentDidMount(){
        //this.props.getUser({id:this.props.match.params.id}, this.props.IsOfficers)
        this.props.getUserBack(this.props.IsOfficers)
        
    }

    back=()=>{
        this.props.history.goBack()
        this.props.getUserBack(this.props.IsOfficers)
    }

    render() {
        console.log(this.props)
        return(
            <MainContentWrapper>
                <Link onClick={this.back} class="news__link"><GrLinkPrevious class="news__link-img" />Назад</Link>
                <EditFrom IsOfficers={this.props.IsOfficers}/>         
            </MainContentWrapper>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getUser: (values, IsOfficers) => {
            IsOfficers ? dispatch(getFilteredofficersThunkCreator(values)) :
                dispatch(getFilteredCadetsThunkCreator(values));
        },
        getUserBack: (IsOfficers) => {
            IsOfficers ? dispatch(getofficersThunkCreator()):
                dispatch(getCadetsThunkCreator());
        },
    }
}

let maptoStateToProps = (state) => {
    return {
        info: state.WHOsReduser.whosPage
    }
}

export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
    withRouter
)(WhoEdit)

const Edit =(props)=>(
    <form class="editForm">
        <InputDropDown title="Воинское звание" link={props.militaryRank} name="militaryRank" />
        <InputDropDown title="Должность" link={props.position} name="position" />

        <TextArea title="Имя" size="1" name="firstName" />
        <TextArea title="Отчество" size="1" name="middleName" />
        <TextArea title="Фамилия" size="1" name="lastName" />

        <InputDate title="Дата рождения" name="birthDay" />
        <InputDate title="Дата призыва" name="dateOfStartService" />
        {props.IsOfficers ?
            <TextArea title="Кем призван" name="nameOFVoinkom" /> : <div></div>}
        {props.IsOfficers ?
            <TextArea title="Серия и номер удостоверения" name="serialAndNumderMilitaryDocs" /> : <div></div>}
        {props.IsOfficers ? <div></div> :
            <InputDropDown title="Специализация" link={props.nameOfSpec} name="groupName" />}
        {props.IsOfficers ?
            <InputDropDown title="Подразделение" link={props.units} name="unit" /> :
            <InputDropDown title="Номер группы" link={props.groups} name="groupNumber" />}

        {props.IsOfficers ?
            <TextArea title="Паспорт (серия и номер)" size="1" name="serialAndNumderCivilyDocs" /> : <div></div>}
        {props.IsOfficers ?
            <TextArea title="Кем выдан" size="1" name="whoGetPassport" /> : <div></div>}
        {props.IsOfficers ?
            <InputDate title="Дата выдачи" name="dateOfIssue" /> : <div></div>}
        {props.IsOfficers ?
            <InputDate title="Действителен до" name="dateOfExpiry" /> : <div></div>}

        {props.IsOfficers ?
            <TextArea title="Форма" size="1" name="FormSec" /> : <div></div>}
        {props.IsOfficers ?
            <InputDate title="Дата окончания формы" name="DateFormSec" /> : <div></div>}

        <InputFile title="Фото" name="pathPhotoSmall" />
        <CheckboxArea title="Женат (замужем)" size="1" name="isMarried" />

        <TextArea title="Информация" size="3" name="info" />
        <button type="submit" class="chat-input__submit btn">Сохранить</button>
    </form>
)

const EditFrom = reduxForm({form: 'editWho'})(Edit)