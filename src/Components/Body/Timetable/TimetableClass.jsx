import React from 'react';
import { reduxForm, Field } from 'redux-form';
import Fileupload from '../../UploaderFile/Uploader';




export class Timetable extends React.Component {

    componentDidMount() {
        this.props.getUser();
        var day = new Date().getDay();
        var month = new Date().getMonth();
        var year = new Date().getFullYear();
        var fullDate = year + "-" + month + "-" + day + " 00:00:00.0000000"
        this.props.getTimetable(this.props.currGroup, fullDate);
    }

    getTT = (group, fullDate) => {

        this.props.getTimetable(group, fullDate);
    }

    submit = values => {
        // print the form values to the console
        var fullDate = values.date + " 00:00:00.0000000";
        var group = values.group;

        console.log(values)
        this.getTT(group, fullDate)
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }

}
