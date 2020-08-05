
import React, { Component } from 'react';
import classes from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { AuthMe } from '../../API/authAPI';




export class LoginSuccess extends React.Component {


    componentDidMount() {
        debugger;
        this.props.getUserInfo();
    }
    render() {
        return (
            <div >
                <h1>Heloo</h1>
            </div>
        );
    }

}