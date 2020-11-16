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
                <div className={classes.AuthHeader}>
                    <div class={classes.supper_right}>
                        <div class={classes.supper_right_buttons_login}>
                            <div class={classes.a1} onClick={this.logout}>LogOut</div>
                        </div>
                        <div class={classes.supper_right_user}>
                            <div><div class={classes.upper_right_user_icon}></div></div>
                            <div class={classes.upper_right_user_information}>{name}</div>
                            <div class={classes.upper_right_user_information}>{family_name}</div>
                            <div class={classes.upper_right_user_information}>{role[0]}</div>
                            
                            <div class={classes.supper_right_aims}>Задачи на сегодня:</div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className={classes.AuthHeader}>
                    <div class={classes.supper_right}>                   
                        <div class={classes.upper_right_buttons}>
                            <div class={classes.supper_right_buttons_login}>
                                <div class={classes.a1} onClick={this.login}>Login</div>
                            </div>
                            <div class={classes.supper_right_buttons_login}>
                                <div class={classes.a1} onClick={this.Register}>Registration</div>
                            </div>
                        </div>

                    </div>
                </div >
            );
        }
    }
}