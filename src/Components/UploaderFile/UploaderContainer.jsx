import react from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux';

let maptoStateToProps = (state) => {
    return {
        id:''
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setId: () => {
            dispatch(setId());
        }
    }
}

export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
    //withAuthRedirect
)(Users);