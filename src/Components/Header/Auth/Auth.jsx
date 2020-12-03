import React from 'react'
import { LogOutMe, AuthMe } from '../../../API/authAPI';

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
        console.log(this.props);
        var name = this.props.AuthClass.loginPage.user.given_name;
        var family_name = this.props.AuthClass.loginPage.user.family_name;
        var role = this.props.AuthClass.loginPage.user.role
        if (this.props.AuthClass.loginPage.isLoadingUser) {
            return (
                <div >
                    <div >
                        <div >
                            <div  onClick={this.logout}>LogOut</div>
                        </div>
                        <div >
                            <div><div ></div></div>
                            <div >{name}</div>
                            <div >{family_name}</div>
                            <div >{role[0]}</div>
                            
                            <div >Задачи на сегодня:</div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div >
                    <div >                   
                        <div >
                            <div >
                                <div  onClick={this.login}>Login</div>
                            </div>
                            <div >
                                <div  onClick={this.Register}>Registration</div>
                            </div>
                        </div>

                    </div>
                </div >
            );
        }
    }
}