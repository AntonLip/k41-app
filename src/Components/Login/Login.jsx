
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { AuthMe } from '../../API/authAPI';




export class LoginSuccess extends React.Component {


    componentDidMount() {      
        this.props.redie();
    }
    render() {
        return (
            <div >
                <h1>Heloo</h1>
            </div>
        );
    }

}