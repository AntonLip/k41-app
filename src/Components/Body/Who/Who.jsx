import React from 'react'

<<<<<<< HEAD
import {TableRow} from './Item/TableRow/TableRow'
import Profile from './Item/Profile/Profile'
import { Menu } from './Item/Menu/Menu'
const TableOfPerson = (props) => {    
    let allPerson;
    if (props.persons === undefined) {
        allPerson = <TableRow />
    }
    else {
        if (props.persons.length != 0) {
            allPerson = props.persons.map((u) => { return <TableRow u={u} /> });
        }
    }
    return (
        <div class="table__wrapper">
            <table>
                <tr>
                    <th>Рег<br></br>номер</th>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчетсво</th>
                    <th>Должность</th>
                    <th>В/звание</th>
                    <th>Подразделение</th>
                </tr>
                {allPerson}
            </table>
        </div>
    )
}

export class WHO extends React.Component {

    state = {
        profile : {}
    }

    componentDidMount() {
        this.getData();
        this.props.IsOfficers ? this.props.getUser() : this.props.getCadets()
                
    }
    getData() {
        this.props.setPosition();
        this.props.setMilitaryRank();
        this.props.setAcademicDegree();
        this.props.setAcademicTittes();
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
    submit = values => {
        console.log(values);
        
    }
    render() {

        debugger
        return (
            <div class="who">
                <div class="who__wrapper">
                    <div class="table who__table">
                        <Menu />
                        {this.props.IsOfficers ? <TableOfPerson persons={this.props.officers} onClick={this.submit}/> : <TableOfPerson persons={this.props.cadets} />}
                    </div>
                    <Profile info={this.state.profile}/>
                </div>
            </div>
        );
    }
}


=======
import SortItem from '../Sort/SortItem'
import Sort from '../Sort/Items/Sort/Sort'
import TableRow from './Item/TableRow/TableRow'
import Profile from './Item/Profile/Profile'

const who = () => {
    return (
        <div class="who">
            <div class="who__wrapper">
                <div class="table who__table">
                    <SortItem>
                        <Sort title="По алфавиту"/>
                        <Sort title="По званию"/>
                        <Sort title="По подразделению"/>
                        <Sort title="По должности"/>
                    </SortItem>
                    <div class="table__wrapper">
                        <table>
                            <tr>
                                <th>Рег<br></br>номер</th>
                                <th>Фамилия</th>
                                <th>Имя</th>
                                <th>Отчетсво</th>
                                <th>Должность</th>
                                <th>В/звание</th>
                                <th>Подразделение</th>
                            </tr>
                            <TableRow/>
                            <TableRow/>
                            <TableRow/>
                            <TableRow/>
                            
                        </table>   
                    </div>
                </div>
                <Profile/>
            </div>
        </div>
    )
}

export default who
>>>>>>> refs/remotes/origin/Tsarenkov
