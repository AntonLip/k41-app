
import React from 'react';
import classes from './Login.module.css';


const LoginFrorm = () => {
    return (
        <form>
            <div className={classes.login}>
                <input placeholder="Enter your email address." required />
            </div>
            <div className={classes.password}>
                <input placeholder="Enter your password." required />
            </div>
            <div >
                <input type={"checkbox"} placeholder="Enter your password." required />Remember me
            </div>
            <button className={classes.button}></button>
        </form>
    );
}





export class Login extends React.Component {



    componentDidMount() {

    }


    render() {
        return (
            <div className={classes.okno}>
                <LoginFrorm />
            </div>
           /* <div className={classes.okno}>
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
                    <div >
                        <button className={classes.button}></button>
                    </div>
                </div>
            </div>*/);
    }

}



