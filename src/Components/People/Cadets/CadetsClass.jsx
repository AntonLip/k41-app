
import React from 'react'
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';


const CadetsDisplay = (props) => {
    return (
        <div>
            <div key={props.u.id}>
                <div >
                    <div id="card" >
                        <div ></div>
                        <div >
                            <div >{props.u.militaryRank}</div>
                            <div >{props.u.firstName}</div>
                            <div >{props.u.middleName}</div>
                            <div >{props.u.lastName}</div>
                            <div >{props.u.position}</div>
                            <div >{props.u.groupNumber}</div>
                        </div>

                        <button id="btn-more" >изменить</button>
                        <NavLink to={'/updateUser/' + props.u.id}
                             >изменить</NavLink>
                        <button id="btn-more"  >удалить</button>

                    </div>
                </div>
            </div>
        </div>
    );
}


const SetFilterCadets = (props) => {
    let militaryRankOptions = props.optionsMilitaryRank.map(u => {
        return (
            <option value={u.name}>{u.name}</option>
        )
    });
    let positionOptions = props.optionsPositions.map(u => {
        return (
            <option value={u.name}>{u.name}</option>
        )
    });
return(
    <div>
       
    </div>
);
    }
export class CadetsClass extends React.Component {

    componentDidMount() {
        this.props.getCadets();
    }
    IsInRole(role, needRole) {
        if ((Array.isArray(role))) {
            for (let i = 0; i < role.length; i++) {
                if (role[i] === needRole)
                    return true;
            }
            return false;
        } else {
            if (role === needRole) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    render() {
debugger;
        console.log(this.props);
        let AllCadtes = this.props.cadets.map((u) => { return <CadetsDisplay u={u} /> });

        if (!this.props.isAuth) {
            window.location = "/AccessDenided";
        }

        if (this.IsInRole(this.props.role, "Admin")) {
            return (
                <div >
                    <div >
                        <NavLink to="/newUser" >Добавить</NavLink>
                        <SetFilterCadets optionsMilitaryRank={this.props.militaryRank}
                            optionsPositions={this.props.position} />
                    </div>
                    <div>
                        {AllCadtes}
                    </div>
                </div>);
        };
        if (this.IsInRole(this.props.role, "lectural")) {
            return (
                <div >
                    <div >
                        <SetFilterCadets optionsMilitaryRank={this.props.militaryRank}
                            optionsPositions={this.props.position} />
                    </div>
                    <div>
                        {AllCadtes}
                    </div>
                </div>);
        };
        if (this.IsInRole(this.props.role, "cadets")) {
            return (<div>{AllCadtes}</div>);
        }
        else{
            window.location = "/AccessDenided";
        }

    }
}