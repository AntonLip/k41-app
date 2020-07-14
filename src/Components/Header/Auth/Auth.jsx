import React from 'react'
import classes from "./auth.module.css"
import Oidc from 'oidc-client'

import userManager from './userManager.js'
import { CallbackComponent } from 'redux-oidc'

export class AuthClass extends React.Component {
     successCallback = (user) => {
        console.log(user);
      };
     
       errorCallback = (error) => {
        console.error(error);
      };

    render(){
        return (            
            <div className={classes.AuthHeader}>
                    <div className={classes.AuthField}>
                        <form>
                            <input />
                        </form>
                    </div>
                    <div className={classes.AuthField}>
                        <form>
                            <input />
                        </form>
                    </div>
                    <div className={classes.buttonContainer}>
                        <form>
                            <button >Войти</button>
                        </form>
                    </div>
                </div>
        );
    }


}