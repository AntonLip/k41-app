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
    changePhoto(){
        console.log('change');
    }
    render() {
        debugger
        console.log(this.props);
        var given_name = this.props.AuthClass.loginPage.user.given_name;
        var family_name = this.props.AuthClass.loginPage.user.family_name;
        var position = this.props.AuthClass.loginPage.user.position;  
        var picture = this.props.AuthClass.loginPage.user.picture;
        if (this.props.AuthClass.loginPage.isLoadingUser) {
            return( <Logout logout={this.logout} changePhoto={this.changePhoto}
                    family_name={family_name} picture={picture}
                    given_name={given_name} position={position}/>);
        }
        else {
            return (<Login login={this.login} register={this.Register}/>);
        }
    }
}