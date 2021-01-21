import React from 'react'
import { GrLinkPrevious } from 'react-icons/gr'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import MainContentWrapper from '../../MainContentWrapper/MainContentWrapper'
import WhoEditForm from './WhoEditForm'

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
