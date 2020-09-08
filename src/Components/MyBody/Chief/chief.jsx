import React from 'react'
import classes from './chief.module.css'
import { Redirect } from 'react-router-dom';
export class Chief extends React.Component {

    componentDidMount() {
      
        if (!this.props.isAuth)
        this.toHistory();
    }

    toCadets() {
        window.location = "/Cadets";
    }
    toOfficers() {
        window.location = "/Users";
    }
    toAuditore() {
        window.location = "/Auditore";
    }
    toTecknik() {
        window.location = "/Tecknik";
    }

    toHistory() {
        window.location = "/History";
    }
    render() {
        
        return (
            <div >
                <div>
                    <button onClick={this.toCadets}>Курсанты</button>
                </div>
                <div>
                    <button onClick={this.toOfficers}>Офицеры</button>
                </div>
                <div>
                    <button onClick={this.toAuditore}>Аудитории</button>
                </div>
                <div>
                    <button onClick={this.toTecknik}>Техника</button>
                </div>
                <div>
                    <button onClick={this.toHistory}>История</button>
                </div>
            </div>
        );
    }
}

