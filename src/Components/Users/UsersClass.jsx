import React from 'react'
import * as axios from 'axios'
import classes from './Users.module.css'

export class Users extends React.Component {

    stringOfEndPoint = "https://localhost:44351/api/Lecturals";

    getUsers() {
        debugger;
        if (this.props.users.length === 0) {
            axios.get(this.stringOfEndPoint).then(Response => {
                this.props.setUsers(Response.data);
            })
        }
    }

    componentDidMount() {
        axios.get(this.stringOfEndPoint).then(Response => {
            this.props.setUsers(Response.data);
        });
    }

    render() {
        debugger;
        return (
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <div className={classes.image}>{u.pathPhotoSmall}</div>
                        <div>{u.firstName}</div>
                        <div>{u.middleName}</div>
                        <div>{u.lastName}</div>
                        <div>{u.position}</div>
                    </div>
                    )
                }
            </div>);
    }
}