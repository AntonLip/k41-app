import React from 'react'
import { GrLinkPrevious } from 'react-icons/gr'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import MainContentWrapper from '../../MainContentWrapper/MainContentWrapper'
<<<<<<< HEAD
import { connect } from 'react-redux'
import { getFilteredofficersThunkCreator, getofficersThunkCreator, getCadetsThunkCreator, getCadetsByIdThunkCreator } from '../../../../Redux/whos-reduser'
import InputDropDown from '../../Sort/Items/Input/items/InputDropDown/InputDropDown'
import TextArea from '../../Sort/Items/Input/items/TextArea/TextArea'
import { InputDate } from '../../Sort/Items/Date/InputDate'
import InputFile from '../../Sort/Items/Input/items/File/InputFile'
import { CheckboxArea } from '../../Sort/Items/Input/items/Checkdox/InputCheckbox'
import { initialize, reduxForm } from 'redux-form'
import { setAcademicDegreeThunkCreator, setAcademicTitleThunkCreator, setGroupsThunkCreator, setMilitaryRankThunkCreator, setUnitThunkCreator } from '../../../../Redux/generalInfo-reduser'
import TextInput from '../../Sort/Items/Input/items/TextInput/TextInput'
=======
import WhoEditForm from './WhoEditForm'
>>>>>>> 04328c62a94334238daeaaae65bd81ec4b4e88ca

class WhoEdit extends React.Component {

    back = () => {
        this.props.history.goBack()
        //this.props.getUserBack(this.props.IsOfficers)
    }
    submit = values => {
        debugger
        console.log(values)
    }
    render() {
        return (
            <MainContentWrapper>
                <Link onClick={this.back} class="news__link"><GrLinkPrevious class="news__link-img" />Назад</Link>
                <WhoEditForm onSubmit={this.submit}/>
            </MainContentWrapper>
        )
    }
}





export default compose(
    withRouter,
)(WhoEdit)
