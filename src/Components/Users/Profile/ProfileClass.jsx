import React from 'react'
import * as axios from 'axios'
import {Profile} from './Profile'


export class ProfileClass extends React.Component {

    
    stringOfEndPoint = 'https://localhost:44351/api/Lecturals/' + this.props.match.params.id;
    getProfile(props) {
        debugger;
        if (this.props.ProfilePage.length === null) {
             axios.get(this.stringOfEndPoint).then(Response => {
                 this.props.setProfile(Response.data);
             })
         }
     }
 
     componentDidMount() {
         debugger;
         let id = this.props.match.params.id;
         axios.get(this.stringOfEndPoint).then(Response => {
             this.props.setProfile(Response.data);
         });
     }


    render() {
        return (<Profile {...this.props} ></Profile>);
    }
}
