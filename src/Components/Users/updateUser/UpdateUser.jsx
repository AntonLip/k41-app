
import React from 'react'
import {NewUserReduxFormR} from './../newUser/newUser.jsx'
import {  Redirect } from 'react-router-dom';



export class UpdateUsers extends React.Component {
    
    state = {
        redirect: false,
        user:{}
    }
constructor(props){
    super(props);    
    let id = this.props.match.params.id;
    this.props.getUserbyId(id);    
}
  

    componentDidMount() {        
       
    }
    submit = values => {
        debugger
        this.props.userData = 0;
        console.log(values);
        values.countOfChildren = parseInt(values.countOfChildren);
        values.FormSec = parseInt(values.FormSec);
        this.props.updateUser(values).then(
            () => this.setState({ redirect: true })
        );
    }
    render() {
        
        if(!this.props.isAuth)
            return <Redirect to='/AccessDenided' />;

        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/Users' />;
        }        
        console.log(this.props);
        return (
            <div>
                <div >
                    <NewUserReduxFormR onSubmit={this.submit}
                        optionsMilitaryRank={this.props.militaryRank}
                        optionsPositions={this.props.position}
                        optionsAcademicTitle={this.props.academicTitle}
                        optionsAcademicDegree={this.props.academicDegree}
                        user={this.props.userData}
                    />
                </div>
            </div>);
    }
}
