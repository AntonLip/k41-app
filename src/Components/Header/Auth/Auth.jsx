import React from 'react'
import classes from "./auth.module.css"
import { LogOutMe, AuthMe } from '../../../API/authAPI';

export class AuthClass extends React.Component {
    successCallback = (user) => {
        console.log(user);
    };

    errorCallback = (error) => {
        console.error(error);
    };
    login(){
        AuthMe();
    }
    logout(){
        LogOutMe();
    }
    render() {
        console.log(this.props);    
        if (this.props.AuthClass.loginPage.isLoadingUser) {
            return (
                <button onClick={this.logout} >Logout</button>
            );
        }
        else {
            return (
                <div className={classes.AuthHeader}>
                    <div className={classes.buttonContainer}>
                    <button onClick={this.login} >Login</button>
                    <button onClick={this.logout} >logout</button>
                </div>
               </div >
            );
        }
    }


}