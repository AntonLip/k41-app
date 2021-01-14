import React from 'react'
import { GrLinkPrevious } from 'react-icons/gr'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import MainContentWrapper from '../../MainContentWrapper/MainContentWrapper'

const WhoEdit = (props) => {
    console.log(props)
    return (
        <MainContentWrapper>
            <Link to={props.pathBack} class="news__link"><GrLinkPrevious class="news__link-img" />Назад</Link>
        </MainContentWrapper>
    )
}

export default compose(withRouter)(WhoEdit)
