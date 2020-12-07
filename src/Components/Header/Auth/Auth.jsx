import React from 'react'
import { LogOutMe, AuthMe } from '../../../API/authAPI';
import Login from './Login/Login';
import Logout from './Logout/Logout';

export class AuthClass extends React.Component {
    successCallback = (user) => {
        console.log(user);
    };

    errorCallback = (error) => {
        console.error(error);
    };
    login() {
        AuthMe();
    }
    logout() {
        LogOutMe();
    }
    Register() {
        window.location.href = "http://localhost:5001/Account/Register";
    }
    render() {
        debugger
        console.log(this.props);
        var name = this.props.AuthClass.loginPage.user.given_name;
        var family_name = this.props.AuthClass.loginPage.user.family_name;
        var role = this.props.AuthClass.loginPage.user.role
        if (this.props.AuthClass.loginPage.isLoadingUser) {
            return( <Logout logout={this.logout}/>);
        }
        else {
            return (<Login login={this.login} register={this.Register}/>);
        }
    }
}