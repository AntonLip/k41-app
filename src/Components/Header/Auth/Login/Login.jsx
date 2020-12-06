import React from 'react'
import classes from "./login.module.css"
const Login = (props) => {
    return (
        <div>
            <div >
                <div >
                    <div >
                        <div className={classes.a1} onClick={props.login}>Login</div>
                    </div>
                    <div >
                        <div className={classes.a1} onClick={props.register}>Registration</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
