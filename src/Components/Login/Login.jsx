
import React from 'react';
import classes from './Login.module.css';



export class Login extends React.Component {



    componentDidMount() {
      
    }


    render() {
        return (
            <div className={classes.okno}>
                <div className={classes.aut} >
                    <div className={classes.text2}>Авторизация</div>
                    <div className={classes.login}>
                        <input type="email"  placeholder="Enter your email address." required />
                    </div>
                    <div className={classes.password}>
                        <form action="Адрес сервера для отправки данных" method="post">
                            <input type="text" placeholder="Enter your password." required />
                        </form>
                    </div>
                    <div className={classes.button}>

                        <button className={classes.button}></button>
                    </div>
                </div>
            </div>);
    }

}



