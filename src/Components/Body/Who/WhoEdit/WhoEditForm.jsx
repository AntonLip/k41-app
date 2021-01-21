
import React from "react"
import { compose } from "redux"
import { connect } from 'react-redux'
import { initialize, reduxForm } from "redux-form"
import { setAcademicDegreeThunkCreator, setAcademicTitleThunkCreator, setGroupsThunkCreator, setMilitaryRankThunkCreator, setUnitThunkCreator } from "../../../../Redux/generalInfo-reduser"
import { getCadetsByIdThunkCreator, getCadetsThunkCreator, getofficersBuIdThunkCreator, getofficersThunkCreator } from "../../../../Redux/whos-reduser"
import { InputDate } from "../../Sort/Items/Date/InputDate"
import { CheckboxArea } from "../../Sort/Items/Input/items/Checkdox/InputCheckbox"
import InputFile from "../../Sort/Items/Input/items/File/InputFile"
import InputDropDown from "../../Sort/Items/Input/items/InputDropDown/InputDropDown"
import TextArea from "../../Sort/Items/Input/items/TextArea/TextArea"
import { withRouter } from "react-router-dom"

class WhoEditForm extends React.Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.id, this.props.IsOfficers)
        this.props.initForm(this.props.info)
        this.props.setMilitaryRank()
        this.props.getGroups()
        this.props.setMilitaryRank()
        this.props.setAcademicDegree()
        this.props.setAcademicTittes()
        this.props.getUnits()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.info !== this.props.info) {
            {
                this.props.initForm(this.props.info)
            }
        }
    }
    render() {
        return (
            <form class="editForm" onSubmit={this.props.handleSubmit}>
                <InputDropDown title="Воинское звание" link={this.props.militaryRank} name="militaryRank" />
                <InputDropDown title="Должность" link={this.props.position} name="position" />

                <TextArea title="Имя" size="1" name="firstName" />
                <TextArea title="Отчество" size="1" name="middleName" />
                <TextArea title="Фамилия" size="1" name="lastName" />

                <InputDate title="Дата рождения" name="birthDay" />
                <InputDate title="Дата призыва" name="dateOfStartService" />
                {this.props.IsOfficers ?
                    <TextArea title="Кем призван" name="nameOFVoinkom" /> : <div></div>}
                {this.props.IsOfficers ?
                    <TextArea title="Серия и номер удостоверения" name="serialAndNumderMilitaryDocs" /> : <div></div>}
                {this.props.IsOfficers ? <div></div> :
                    <InputDropDown title="Специализация" link={this.props.nameOfSpec} name="groupName" />}
                {this.props.IsOfficers ?
                    <InputDropDown title="Подразделение" link={this.props.units} name="unit" /> :
                    <InputDropDown title="Номер группы" link={this.props.groups} name="groupNumber" />}
                {this.props.IsOfficers ?
                    <InputDropDown title="Научное звание" link={this.props.academicTitle} name="academicTitle" /> : <div></div>}
                {this.props.IsOfficers ?
                    <InputDropDown title="Научная степень" link={this.props.academicDegree} name="academicDegree" /> : <div></div>}
                {this.props.IsOfficers ?
                    <TextArea title="Паспорт (серия и номер)" size="1" name="serialAndNumderCivilyDocs" /> : <div></div>}
                {this.props.IsOfficers ?
                    <TextArea title="Кем выдан" size="1" name="whoGetPassport" /> : <div></div>}
                {this.props.IsOfficers ?
                    <InputDate title="Дата выдачи" name="dateOfIssue" /> : <div></div>}
                {this.props.IsOfficers ?
                    <InputDate title="Действителен до" name="dateOfExpiry" /> : <div></div>}

                {this.props.IsOfficers ?
                    <TextArea title="Форма" size="1" name="FormSec" /> : <div></div>}
                {this.props.IsOfficers ?
                    <InputDate title="Дата окончания формы" name="DateFormSec" /> : <div></div>}

                <InputFile title="Фото" name="pathPhotoSmall" />
                <CheckboxArea title="Женат (замужем)" size="1" name="isMarried" />

                <TextArea title="Информация" size="3" name="info" />
                <button type="submit" class="chat-input__submit btn">Сохранить</button>
            </form>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getUser: (values, IsOfficers) => {
            IsOfficers ? dispatch(getofficersBuIdThunkCreator(values)) :
                dispatch(getCadetsByIdThunkCreator(values));
        },
        initForm: (data) => {
            dispatch(initialize('editWho', data))
        },
        getUserBack: (IsOfficers) => {
            IsOfficers ? dispatch(getofficersThunkCreator()) :
                dispatch(getCadetsThunkCreator());
        },
        setMilitaryRank: () => {
            dispatch(setMilitaryRankThunkCreator());
        },
        getGroups: () => {
            dispatch(setGroupsThunkCreator());
        },
        setMilitaryRank: () => {
            dispatch(setMilitaryRankThunkCreator());
        },
        setAcademicDegree: () => {
            dispatch(setAcademicDegreeThunkCreator());
        },
        setAcademicTittes: () => {
            dispatch(setAcademicTitleThunkCreator());
        },
        getUnits: () => {
            dispatch(setUnitThunkCreator());
        },

    }
}

let maptoStateToProps = (state) => {
    return {
        info: state.WHOsReduser.whosPage.currentUser,
        militaryRank: state.generalInfoReduser.info.militaryRank,
        position: state.generalInfoReduser.info.position,
        units: state.generalInfoReduser.info.units,
        academicDegree: state.generalInfoReduser.info.academicDegree,
        groups: state.generalInfoReduser.info.groups,
        academicTitle: state.generalInfoReduser.info.academicTitle,
        nameOfSpec: state.generalInfoReduser.info.specializations
    }
}

export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
    withRouter,
    reduxForm({ form: 'editWho' })
)(WhoEditForm)