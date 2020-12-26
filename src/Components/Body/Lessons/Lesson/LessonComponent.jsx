
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Lesson } from './Lesson';
let maptoStateToProps = (state) => {
    return {
        nameofDiscoplines: state.disciplinesReduser.DisciplinesPage.nameofDiscoplines
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getDiscipine: () => {
            dispatch();
        }
    }
}

export default compose(
    connect(maptoStateToProps, mapDispatchToProps),
)(Lesson)