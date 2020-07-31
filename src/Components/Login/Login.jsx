
import React, { Component } from 'react';
import classes from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import {  authMe } from '../../API/authAPI';


const LoginFrorm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.text2}>
            <div className={classes.login}>
                <Field placeholder={"Login"} name={"login"} component={'input'}  />
            </div>
            </div>
            <div className={classes.password}>
                <Field placeholder={"password"} name={"password"} component={'input'}  />
            </div>
            <div >
                <Field type={"checkbox"} component={'input'} name={"rememderMe"}  />Remember me
            </div>
            <button className={classes.button}></button>
        </form>
    );
}

const LoginReduxForm = reduxForm({
form:'login'
})(LoginFrorm)



export const Login =() => {
    
    const onSubmit = (formData) =>{
    console.log(formData);
    authMe(formData);
    }
   
        return (
            <div className={classes.okno}>
                <div className={classes.aut} >
                <LoginReduxForm onSubmit={onSubmit.bind(this)}/>
                </div>
            </div>
        );   

}


