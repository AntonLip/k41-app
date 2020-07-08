import React from 'react'
import classes from "./auth.module.css"


export class AuthClass extends React.Component {


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
                            <button>Войти</button>
                        </form>
                    </div>
                </div>
        );
    }


}