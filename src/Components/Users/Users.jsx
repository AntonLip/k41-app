import React from 'react'
import * as axios from 'axios'
const User = (props) => {

    debugger;
    return (
        <div key={props.id}>
            <div>{props.firstName}</div>
            <div>{props.lastName}</div>
        </div>
    );
}


export const Users = (props) => {
    debugger;
    if (props.users.length === 0) {
        // props.setUsers({
        //     users: 
        //     [
        //         { id: 1, FirstName: 'Anton', LastName:'Liplianin' status: 'Im learning', Group: "433", followed: false },
        //         { id: 2, fullName: 'Dmitry', status: 'Im working', Group: "453", followed: false },
        //         { id: 3, fullName: 'Alex', status: 'Im silly', Group: "432", followed: true },
        //     ]
        // })
        axios.get("https://localhost:44318/api/Customers").then(Response =>{
            debugger;
            props.setUsers(Response.data);
        })
    }
    let AllUsers = props.users.map((u) => {
        return <User id={u.id} firstName={u.firstName} lastName={u.lastName}/>
    })
    return (
        <div>
            {AllUsers}
        </div>
    );
} 